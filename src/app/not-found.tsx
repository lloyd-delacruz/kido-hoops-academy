import Link from "next/link";
export default function NotFound() {
  return (
    <section className="section not-found">
      <div className="container">
        <p className="eyebrow">404 · Air ball</p>
        <h1 className="h1 mt-6">That page is out of bounds.</h1>
        <div className="btn-row mt-7" style={{ justifyContent: "center" }}>
          <Link href="/" className="btn">Back to home</Link>
          <Link href="/programs/" className="btn btn--ghost">See programs</Link>
        </div>
      </div>
    </section>
  );
}
