"use client";

import { useState } from "react";
import { site, courtRentalNote } from "@/lib/site";

const pay = site.payment;

function CopyNumber({ label }: { label: string }) {
  const [state, setState] = useState<"idle" | "ok" | "err">("idle");
  return (
    <button
      type="button"
      className="pay-copy"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(pay.phoneRaw);
          setState("ok");
        } catch {
          setState("err");
        }
        window.setTimeout(() => setState("idle"), 2500);
      }}
      aria-label={`Copy ${label} number ${pay.phoneDisplay}`}
    >
      <span className="pay-copy__num">{pay.phoneDisplay}</span>
      <span className="pay-copy__action" aria-live="polite">
        {state === "ok" ? "Copied ✓" : state === "err" ? "Select & copy" : "Copy"}
      </span>
    </button>
  );
}

const VenmoMark = () => (
  <svg viewBox="0 0 48 48" width="40" height="40" aria-hidden="true">
    <rect width="48" height="48" rx="12" fill="#008CFF" />
    <path d="M33.6 12c1 1.6 1.4 3.3 1.4 5.4 0 6.7-5.7 15.4-10.4 21.6H14.1L10 14.3l9.2-.9 2.2 17.9c2.1-3.4 4.6-8.7 4.6-12.4 0-2-.3-3.4-.9-4.5L33.6 12z" fill="#fff" />
  </svg>
);
const ZelleMark = () => (
  <svg viewBox="0 0 48 48" width="40" height="40" aria-hidden="true">
    <rect width="48" height="48" rx="12" fill="#6D1ED4" />
    <path d="M14 14h20v5L22 31h12v5H14v-5l12-12H14z M22.5 9h3v5h-3z M22.5 36h3v4h-3z" fill="#fff" />
  </svg>
);

/**
 * Payment instructions for Venmo and Zelle (both registered to the coach's phone number).
 * No payments are processed by the website itself.
 */
export default function PaymentOptions({ compact = false }: { compact?: boolean }) {
  const venmoLink = pay.venmoUsername ? `https://venmo.com/u/${pay.venmoUsername}` : null;
  return (
    <div className={`pay ${compact ? "pay--compact" : ""}`}>
      <div className="pay__grid">
        <article className="pay-card">
          <header className="pay-card__head">
            <VenmoMark />
            <div>
              <h3>Venmo</h3>
              <p>Send to this phone number</p>
            </div>
          </header>
          <CopyNumber label="Venmo" />
          <ol className="pay-steps">
            <li>Open Venmo and tap <strong>Pay / Request</strong>.</li>
            <li>Search the number above (or paste it).</li>
            <li>Confirm the recipient is <strong>{pay.payeeName}</strong>, then pay.</li>
          </ol>
          {venmoLink && (
            <a className="btn btn--navy pay-card__btn" href={venmoLink} target="_blank" rel="noopener noreferrer">
              Pay with Venmo <span className="arrow" aria-hidden="true">→</span>
            </a>
          )}
        </article>

        <article className="pay-card">
          <header className="pay-card__head">
            <ZelleMark />
            <div>
              <h3>Zelle</h3>
              <p>Send to this phone number</p>
            </div>
          </header>
          <CopyNumber label="Zelle" />
          <ol className="pay-steps">
            <li>Open your bank&apos;s app (or the Zelle app) and choose <strong>Send money with Zelle</strong>.</li>
            <li>Enter the number above as the recipient.</li>
            <li>Confirm the recipient is <strong>{pay.payeeName}</strong>, then send.</li>
          </ol>
        </article>
      </div>
      <ul className="pay-notes">
        <li>
          <strong>Pay after Coach Kido confirms your booking</strong> and the amount. Please put your name and the program in
          the payment note (e.g. &ldquo;Smith, Group Package&rdquo;).
        </li>
        <li>{courtRentalNote}</li>
        <li>Venmo and Zelle payments generally can&apos;t be cancelled once sent, so double-check the number and name first.</li>
      </ul>
    </div>
  );
}
