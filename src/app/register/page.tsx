import { Suspense } from "react";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import InquiryForm from "@/components/InquiryForm";
import JsonLd from "@/components/JsonLd";
import RegisterForm from "./RegisterForm";
import PaymentOptions from "@/components/PaymentOptions";
import { courtRentalNote, programs } from "@/lib/site";
import { breadcrumbLd, pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Book Training",
  description:
    "Book youth basketball training with Coach Kido Cabrera in Los Angeles. Choose the $800 Group Training Package (5–10 kids, 4 sessions) or $50 per person per hour.",
  path: "/register/",
});

export default function RegisterPage() {
  return (
    <>
      <PageHero
        eyebrow="Registration"
        title={<>Book <span className="accent">training.</span></>}
        lead="Pick an option, tell us about your group, and Coach Kido will follow up to confirm dates and next steps."
        crumbs={[{ label: "Book training" }]}
      />
      <section className="section">
        <div className="container form-wrap">
          <Reveal>
            <p className="eyebrow">How it works</p>
            <h2 className="h2 mt-6">Three steps.</h2>
            <ol className="timeline mt-7">
              <li>
                <span className="timeline__stage">Step 1</span>
                <div><h3>Choose your option</h3><p>{programs[0].name} ({programs[0].price} for 5–10 kids) or {programs[1].name} ({programs[1].price} per person, per hour).</p></div>
              </li>
              <li>
                <span className="timeline__stage">Step 2</span>
                <div><h3>Send your inquiry</h3><p>Share your group size, goals and general availability. The form opens your email app, ready to send to Coach Kido.</p></div>
              </li>
              <li>
                <span className="timeline__stage">Step 3</span>
                <div><h3>Confirm, pay &amp; train</h3><p>Coach Kido confirms your dates and the amount, then you pay by <a className="text-link" href="#payment">Venmo or Zelle</a>. {courtRentalNote}</p></div>
              </li>
            </ol>
            <p className="mt-6">
              Questions first? <Link className="text-link" href="/faq/">Read the FAQ</Link>
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="form-card">
              <h2 className="h3" style={{ marginBottom: "1.5rem" }}>Training inquiry</h2>
              <Suspense fallback={<InquiryForm mode="booking" />}>
                <RegisterForm />
              </Suspense>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="section section--paper2" id="payment" aria-labelledby="pay-title">
        <div className="container pay-band">
          <Reveal>
            <p className="eyebrow">Payment</p>
            <h2 id="pay-title" className="h2 mt-6">Pay with Venmo or Zelle.</h2>
            <p className="lead mt-6">
              No card forms and no fees. Once Coach Kido confirms your booking, send payment straight to him with Venmo or Zelle
              using his phone number.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <PaymentOptions />
          </Reveal>
        </div>
      </section>
      <JsonLd data={breadcrumbLd([{ name: "Book training", path: "/register/" }])} />
    </>
  );
}
