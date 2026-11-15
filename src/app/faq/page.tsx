import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { breadcrumbLd, pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Kids Basketball Training FAQ",
  description:
    "Answers about Kido Hoops Academy pricing, group size, session length, court rental and what players work on. Youth basketball training in Los Angeles.",
  path: "/faq/",
});

/** Every answer below is drawn from the official pricing flyers or coach bio. */
const groups: { title: string; items: { q: string; a: string }[] }[] = [
  {
    title: "Pricing & packages",
    items: [
      {
        q: "How much does the Group Training Package cost?",
        a: "$1,200 total for the group, covering all four 2-hour sessions. Split across the group, that's $120 per player if 10 players join, or $240 per player if 5 join. Court rental is separate.",
      },
      { q: "Is there an option besides the group package?", a: "Yes. Hourly training is $50 per person, per hour. A 2-hour session is $100 per person." },
      { q: "Is the court included?", a: "No. Court rental is additional and paid separately from the coach fee." },
      { q: "How do I pay?", a: "By Venmo or Zelle, sent directly to Coach Kido's phone number, (818) 284-5801. Pay once Coach Kido has confirmed your booking and the amount, and put your name and program in the payment note. The website itself doesn't take card payments." },
      { q: "How do I send an inquiry?", a: "Use the form on the Book Training or Contact page. It opens your email app with a message to Coach Kido already written; just press Send. You can also email cabrerakido@gmail.com or call/text (818) 284-5801." },
    ],
  },
  {
    title: "Sessions & groups",
    items: [
      { q: "How many sessions are in the group package?", a: "Four consecutive sessions, two hours each — eight total training hours." },
      { q: "How big can a group be?", a: "The group package is for groups of 5–10 players." },
      { q: "What do players work on?", a: "Ball handling and control, footwork and agility, shooting technique, passing and game IQ, plus skill evaluation and individual growth for each player." },
    ],
  },
  {
    title: "The coach",
    items: [
      {
        q: "Who runs the training?",
        a: "Coach Kido Cabrera — a former professional basketball player who competed in the Philippines' MPBL and in FIBA 3x3 professional leagues, after starring at North Hollywood High School and the University of Cebu.",
      },
    ],
  },
];

export default function FaqPage() {
  const all = groups.flatMap((g) => g.items);
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title={<>Good <span className="accent">questions.</span></>}
        lead="The essentials on pricing, sessions and groups. Don't see your question? Send us a message."
        crumbs={[{ label: "FAQ" }]}
      />
      <section className="section">
        <div className="container">
          {groups.map((g) => (
            <Reveal key={g.title} className="faq-group">
              <h2>{g.title}</h2>
              <div className="faq">
                {g.items.map((it) => (
                  <details key={it.q}>
                    <summary>{it.q}</summary>
                    <p className="faq__answer">{it.a}</p>
                  </details>
                ))}
              </div>
            </Reveal>
          ))}
          <div className="btn-row mt-8">
            <Link href="/contact/" className="btn">Ask a question <span className="arrow" aria-hidden="true">→</span></Link>
            <Link href="/register/" className="btn btn--ghost">Book training</Link>
          </div>
        </div>
      </section>
      <CtaBand />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: all.map((it) => ({ "@type": "Question", name: it.q, acceptedAnswer: { "@type": "Answer", text: it.a } })),
        }}
      />
      <JsonLd data={breadcrumbLd([{ name: "FAQ", path: "/faq/" }])} />
    </>
  );
}
