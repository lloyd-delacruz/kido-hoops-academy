"use client";

import { useId, useState } from "react";
import { programs, site } from "@/lib/site";

type Mode = "booking" | "contact";
type Errors = Partial<Record<string, string>>;
type Status = { kind: "idle" } | { kind: "opened"; href: string; text: string };

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * Inquiry form — no backend, no form service.
 * On submit it validates, then opens the visitor's own email app with a
 * pre-written message addressed to the coach (mailto:). The visitor presses
 * Send in their mail app, so the inquiry lands straight in the coach's inbox.
 * Collects only what's needed to follow up (no child names, birthdates,
 * medical details or payment info).
 */
export default function InquiryForm({ mode = "booking", defaultProgram }: { mode?: Mode; defaultProgram?: string }) {
  const uid = useId();
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [program, setProgram] = useState(defaultProgram ?? programs[0].slug);

  const id = (n: string) => `${uid}-${n}`;

  function validate(fd: FormData): Errors {
    const e: Errors = {};
    const name = String(fd.get("name") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const phone = String(fd.get("phone") || "").trim();
    const message = String(fd.get("message") || "").trim();
    if (name.length < 2) e.name = "Please enter your name.";
    if (!emailRe.test(email)) e.email = "Please enter a valid email address.";
    if (phone && !/^[0-9+()\-.\s]{7,20}$/.test(phone)) e.phone = "Please enter a valid phone number, or leave it blank.";
    if (mode === "booking") {
      if (program === "group-training") {
        const size = Number(fd.get("groupSize"));
        if (!size || size < 5 || size > 10) e.groupSize = "The group package is for 5–10 kids.";
      }
      if (!fd.get("guardian")) e.guardian = "Please confirm you are the parent/guardian or the adult arranging training.";
    } else if (message.length < 10) {
      e.message = "Please add a short message (at least 10 characters).";
    }
    return e;
  }

  function buildEmail(fd: FormData) {
    const get = (k: string) => String(fd.get(k) || "").trim();
    const p = programs.find((x) => x.slug === program);
    const lines: string[] = [];
    let subject: string;
    if (mode === "booking" && p) {
      subject = `Training inquiry: ${p.name} (${get("name")})`;
      lines.push(`Hi Coach Kido,`, ``, `I'd like to book training with Kido Hoops Academy.`, ``);
      lines.push(`Program: ${p.name} (${p.price} ${p.priceUnit})`);
      if (p.slug === "group-training") lines.push(`Number of kids: ${get("groupSize")}`);
      else if (get("players")) lines.push(`Number of players: ${get("players")}`);
    } else {
      subject = `Website inquiry: ${get("topic") || "General question"} (${get("name")})`;
      lines.push(`Hi Coach Kido,`, ``, `Topic: ${get("topic") || "General question"}`);
    }
    if (get("message")) lines.push(``, mode === "booking" ? `Goals & availability:` : `Message:`, get("message"));
    lines.push(``, `Name: ${get("name")}`, `Email: ${get("email")}`);
    if (get("phone")) lines.push(`Phone: ${get("phone")}`);
    if (mode === "booking") lines.push(``, `I understand court rental is additional and paid separately.`);
    lines.push(``, `Sent from the Kido Hoops Academy website`);
    const text = lines.join("\n");
    const href = `mailto:${site.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
    return { href, text: `To: ${site.contact.email}\nSubject: ${subject}\n\n${text}` };
  }

  function onSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const form = ev.currentTarget;
    const fd = new FormData(form);
    if (fd.get("company")) return; // honeypot
    const e = validate(fd);
    setErrors(e);
    if (Object.keys(e).length) {
      const first = form.querySelector<HTMLElement>(`[name="${Object.keys(e)[0]}"]`);
      first?.focus();
      setStatus({ kind: "idle" });
      return;
    }
    const mail = buildEmail(fd);
    setStatus({ kind: "opened", ...mail });
    window.location.href = mail.href;
  }

  const [copied, setCopied] = useState(false);
  async function copyText(text: string) {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  }

  if (status.kind === "opened") {
    return (
      <div className="form-status form-status--ok" role="status" aria-live="polite">
        <h3>Almost done: press Send in your email app.</h3>
        <p>
          We&apos;ve opened a new email to Coach Kido with your details filled in. It isn&apos;t sent until you press{" "}
          <strong>Send</strong> in your email app.
        </p>
        <p style={{ marginTop: "0.75rem" }}>
          Email app didn&apos;t open?{" "}
          <a href={status.href} data-mailto>
            Try again
          </a>{" "}
          ·{" "}
          <button type="button" className="link-btn" onClick={() => copyText(status.text)}>
            {copied ? "Copied!" : "Copy the message"}
          </button>{" "}
          and email it to <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>, or call/text{" "}
          <a href={`tel:${site.contact.phoneHref}`}>{site.contact.phone}</a>.
        </p>
        <p style={{ marginTop: "0.75rem" }}>
          <button type="button" className="link-btn" onClick={() => setStatus({ kind: "idle" })}>
            ← Edit my inquiry
          </button>
        </p>
      </div>
    );
  }

  const err = (n: string) =>
    errors[n] ? (
      <p className="field__error" id={id(`${n}-err`)}>
        {errors[n]}
      </p>
    ) : null;
  const a11y = (n: string) => ({
    "aria-invalid": errors[n] ? true : undefined,
    "aria-describedby": errors[n] ? id(`${n}-err`) : undefined,
  });

  return (
    <form className="form-grid" onSubmit={onSubmit} noValidate aria-label={mode === "booking" ? "Training inquiry" : "Contact"}>
      {mode === "booking" && (
        <fieldset className="field field--full" style={{ border: 0, padding: 0, margin: 0 }}>
          <legend>Training option</legend>
          <div className="choice-row">
            {programs.map((p) => (
              <div className="choice" key={p.slug}>
                <input
                  type="radio"
                  id={id(p.slug)}
                  name="program"
                  value={p.slug}
                  checked={program === p.slug}
                  onChange={() => setProgram(p.slug)}
                />
                <label htmlFor={id(p.slug)}>
                  <strong>{p.name}</strong>
                  <span>
                    {p.price} {p.priceUnit}
                  </span>
                </label>
              </div>
            ))}
          </div>
        </fieldset>
      )}

      <div className="field">
        <label htmlFor={id("name")}>Your name</label>
        <input id={id("name")} name="name" type="text" autoComplete="name" required {...a11y("name")} />
        {err("name")}
      </div>
      <div className="field">
        <label htmlFor={id("email")}>Email</label>
        <input id={id("email")} name="email" type="email" autoComplete="email" required {...a11y("email")} />
        {err("email")}
      </div>
      <div className="field">
        <label htmlFor={id("phone")}>
          Phone <span className="opt">(optional)</span>
        </label>
        <input id={id("phone")} name="phone" type="tel" autoComplete="tel" {...a11y("phone")} />
        {err("phone")}
      </div>

      {mode === "booking" ? (
        program === "group-training" ? (
          <div className="field">
            <label htmlFor={id("groupSize")}>Number of kids</label>
            <input id={id("groupSize")} name="groupSize" type="number" min={5} max={10} inputMode="numeric" {...a11y("groupSize")} />
            {err("groupSize") || <p className="field__hint">Groups of 5–10.</p>}
          </div>
        ) : (
          <div className="field">
            <label htmlFor={id("players")}>
              Number of players <span className="opt">(optional)</span>
            </label>
            <input id={id("players")} name="players" type="number" min={1} max={20} inputMode="numeric" />
          </div>
        )
      ) : (
        <div className="field">
          <label htmlFor={id("topic")}>Topic</label>
          <select id={id("topic")} name="topic" defaultValue="General question">
            <option>General question</option>
            <option>Group training package</option>
            <option>Hourly training</option>
            <option>Other</option>
          </select>
        </div>
      )}

      <div className="field field--full">
        <label htmlFor={id("message")}>
          {mode === "booking" ? (
            <>
              Goals &amp; availability <span className="opt">(optional)</span>
            </>
          ) : (
            "Message"
          )}
        </label>
        <textarea
          id={id("message")}
          name="message"
          placeholder={
            mode === "booking"
              ? "What would you like to work on, and which days/times generally work for your group?"
              : "How can we help?"
          }
          {...a11y("message")}
        />
        {err("message")}
        {mode === "booking" && (
          <p className="field__hint">Please don&apos;t include children&apos;s full names, birthdates or medical information here.</p>
        )}
      </div>

      {mode === "booking" && (
        <div className="field field--full">
          <div className="checkbox">
            <input id={id("guardian")} name="guardian" type="checkbox" value="yes" {...a11y("guardian")} />
            <label htmlFor={id("guardian")}>
              I&apos;m the parent/guardian (or the adult organizing this group) and I understand court rental is additional and
              paid separately.
            </label>
          </div>
          {err("guardian")}
        </div>
      )}

      {/* Honeypot */}
      <div aria-hidden="true" style={{ position: "absolute", left: "-9999px" }}>
        <label htmlFor={id("company")}>Company</label>
        <input id={id("company")} name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="form-actions field--full">
        <button type="submit" className="btn">
          {mode === "booking" ? "Email my inquiry" : "Email my message"} <span className="arrow" aria-hidden="true">→</span>
        </button>
        <span className="field__hint" style={{ margin: 0 }}>
          Opens your email app, addressed to {site.contact.email}.
        </span>
      </div>
    </form>
  );
}
