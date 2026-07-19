import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";
import Link from "next/link";

export const metadata = { title: "Case Studies — Visuioration" };

const cases = [
  {
    sector: "Residential Construction",
    challenge: "Referral-dependent, inconsistent lead flow, difficult to forecast project starts.",
    strategy: "Google Search + call tracking + CRM integration",
    metrics: [
      ["126", "QUALIFIED ENQUIRIES / 120 DAYS"],
      ["31", "SITE SURVEYS BOOKED"],
      ["14", "PROJECTS SECURED"],
      ["£1.1M", "PIPELINE GENERATED"],
    ],
    cpl: ["CPL: £147 →", "£58"],
  },
  {
    sector: "Commercial Contractor",
    challenge: "Low visibility in competitive local markets, insufficient tender opportunities.",
    strategy: "Google Ads + LinkedIn targeting + qualification workflow",
    metrics: [
      ["89", "QUALIFIED OPPORTUNITIES / 6 MONTHS"],
      ["24", "TENDER INVITATIONS"],
      ["£3.2M", "PIPELINE VALUE"],
    ],
    cpl: ["Cost per opportunity:", "−42%"],
  },
  {
    sector: "Roofing Contractor",
    challenge: "Lead costs increasing while enquiry quality declined.",
    strategy: "Search + local SEO + review generation + call recording",
    metrics: [
      ["162", "QUALIFIED QUOTE REQUESTS / 90 DAYS"],
      ["+57%", "LEAD-TO-APPOINTMENT RATE"],
      ["+38%", "YoY REVENUE"],
    ],
    cpl: ["CPL: £112 →", "£46"],
  },
  {
    sector: "Civil Engineering",
    challenge: "Needed a consistent pipeline of commercial projects in a long sales-cycle industry.",
    strategy: "LinkedIn lead gen + search + industry landing pages + CRM automation",
    metrics: [
      ["52", "QUALIFIED OPPORTUNITIES / 5 MONTHS"],
      ["£4.8M", "SALES PIPELINE"],
      ["+27%", "AVG. PROJECT VALUE"],
    ],
    cpl: ["Cost per opportunity:", "−34%"],
  },
  {
    sector: "Home Extension Builder",
    challenge: "Heavy reliance on referrals and word-of-mouth.",
    strategy: "Google Ads + local SEO + conversion optimisation + call tracking",
    metrics: [
      ["143", "QUALIFIED ENQUIRIES / 4 MONTHS"],
      ["48", "CONSULTATIONS BOOKED"],
      ["£890K", "PIPELINE GENERATED"],
    ],
    cpl: ["CPL: £131 →", "£49"],
  },
  {
    sector: "Commercial HVAC",
    challenge: "Needed more commercial contracts and fewer residential enquiries.",
    strategy: "Account-based LinkedIn + Google Search + CRM scoring",
    metrics: [
      ["71", "QUALIFIED OPPORTUNITIES / 6 MONTHS"],
      ["22", "PROPOSALS SUBMITTED"],
      ["£2.7M", "IDENTIFIED PIPELINE"],
    ],
    cpl: ["Lead quality:", "+61%"],
  },
  {
    sector: "Property Development",
    challenge: "Needed investor and partner enquiries across multiple live projects.",
    strategy: "LinkedIn Ads + search + funnel automation + CRM integration",
    metrics: [
      ["96", "QUALIFIED ENQUIRIES / 5 MONTHS"],
      ["£6.4M", "FUNDING OPPORTUNITIES IDENTIFIED"],
      ["+52%", "CONVERSION RATE"],
    ],
    cpl: ["Qualified enquiry cost:", "−39%"],
  },
  {
    sector: "Groundworks & Landscaping",
    challenge: "Seasonal fluctuations in enquiry volume.",
    strategy: "Google Ads + local SEO + landing page optimisation + remarketing",
    metrics: [
      ["187", "QUALIFIED QUOTE REQUESTS / 90 DAYS"],
      ["63", "BOOKED SITE VISITS"],
      ["+44%", "REVENUE"],
    ],
    cpl: ["Cost per lead:", "−51%"],
  },
  {
    sector: "Electrical Contractor",
    challenge: "Low volume of qualified commercial enquiries.",
    strategy: "Search advertising + industry landing pages + call tracking + CRM reporting",
    metrics: [
      ["68", "QUALIFIED OPPORTUNITIES / 120 DAYS"],
      ["£2.1M", "PROJECT PIPELINE"],
      ["+48%", "APPOINTMENT BOOKING RATE"],
    ],
    cpl: ["Cost per opportunity:", "−37%"],
  },
  {
    sector: "Construction Recruitment",
    challenge: "Needed a steady flow of qualified candidates and employer enquiries.",
    strategy: "Paid Search + Meta advertising + landing page optimisation + CRM automation",
    metrics: [
      ["234", "QUALIFIED CANDIDATE APPLICATIONS / 3 MONTHS"],
      ["74", "EMPLOYER ENQUIRIES"],
      ["+31%", "REVENUE"],
    ],
    cpl: ["Cost per acquisition:", "−43%"],
  },
];

export default function CaseStudies() {
  return (
    <>
      <Header active="case-studies" />
      <RevealObserver />

      <section className="page-head">
        <span className="crosshair cx-tl" style={{ color: "var(--navy-line)" }}></span>
        <div className="wrap">
          <div className="eyebrow">Documented results</div>
          <h1>Ten campaigns. Contracted numbers. No impressions in sight.</h1>
          <p>Every figure below is the result reported against an agreed target, not a vanity metric picked after the fact.</p>
        </div>
      </section>

      <section id="all-proof">
        <div className="wrap reveal">
          <div className="proof-grid">
            {cases.map((c) => (
              <div className="proof-card" key={c.sector}>
                <div className="sector">{c.sector}</div>
                <div className="challenge">{c.challenge}</div>
                <h4>{c.strategy}</h4>
                {c.metrics.map(([n, l]) => (
                  <div className="proof-metric" key={l}>
                    <span className="n">{n}</span>
                    <span className="l">{l}</span>
                  </div>
                ))}
                <div className="cpl">{c.cpl[0]} <b>{c.cpl[1]}</b></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap reveal">
          <div className="section-label" style={{ textAlign: "center" }}>Your sector next</div>
          <h2>These are the numbers we&apos;re willing to put in a contract. Yours starts with an audit.</h2>
          <div className="hero-ctas">
            <Link href="/contact" className="btn-primary">Request a project →</Link>
            <a href="mailto:contact@visuioration.com" className="btn-ghost">Email the team</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
