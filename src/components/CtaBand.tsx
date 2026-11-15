import Link from "next/link";

export default function CtaBand({
  title = "Gather your group. Train with Coach Kido.",
  body = "Choose the four-session group package or book by the hour. Send an inquiry and Coach Kido will follow up to set dates and a court.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="cta-band" aria-labelledby="cta-title">
      <div className="container cta-band__inner">
        <div>
          <h2 id="cta-title">{title}</h2>
          <p>{body}</p>
        </div>
        <div className="btn-row">
          <Link href="/register/" className="btn btn--navy">
            Book training <span className="arrow" aria-hidden="true">→</span>
          </Link>
          <Link href="/programs/" className="btn btn--light">
            View pricing
          </Link>
        </div>
      </div>
    </section>
  );
}
