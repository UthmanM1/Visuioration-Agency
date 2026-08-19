import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";

export const metadata = { title: "Services — Visuioration" };

export default function Services() {
  return (
    <>
      <Header active="services" />
      <RevealObserver />

      <section className="page-head">
        <span className="crosshair cx-tl" style={{ color: "var(--navy-line)" }}></span>
        <div className="wrap">
          <div className="eyebrow">What we build</div>
          <h1>A contracted lead engine, built channel by channel for your sector.</h1>
          <p>
            Every engagement starts with the same four-stage sequence. What changes is the channel mix
            underneath it — matched to how your buyers actually search, tender and refer.
          </p>
        </div>
      </section>

      <section id="process">
        <div className="wrap reveal">
          <div className="section-label">The sequence</div>
          <h2>Nothing launches until stage two is signed off.</h2>
          <p className="section-intro">This order is fixed. Targets come before spend, always.</p>

          <div className="process">
            <div className="step">
              <div className="step-num">01<span>Audit</span></div>
              <div>
                <h4>Pipeline audit</h4>
                <p>We review your current lead sources, historic cost-per-lead, sales-cycle length and close rate. This sets the baseline everything else is measured against, and tells us honestly whether your target is realistic before we agree to it.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">02<span>Contract</span></div>
              <div>
                <h4>Contracted targets</h4>
                <p>Qualified-lead volume, cost-per-lead ceiling and reporting cadence are written into the engagement letter. You see the exact numbers, and the remedy if we miss them, before anything is built.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">03<span>Build</span></div>
              <div>
                <h4>Channel build</h4>
                <p>We build the specific mix your sector responds to — never a template stack reused across every client regardless of industry.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">04<span>Report</span></div>
              <div>
                <h4>Accountability reporting</h4>
                <p>Monthly reporting against the contracted numbers. If a target is missed for reasons within our control, the remedy clause activates automatically — no renegotiation required.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="channels">
        <div className="wrap reveal">
          <div className="section-label">The channels</div>
          <h2>Six levers, deployed by sector and buying behaviour.</h2>
          <p className="section-intro">
            Residential builders and civil engineering firms don&apos;t buy the same way. We select the mix, we
            don&apos;t sell you all six by default.
          </p>

          <div className="service-grid">
            <div className="service-card">
              <div className="num">01</div>
              <h4>Google Search Ads</h4>
              <p>Location-based, intent-driven campaigns for the moment a buyer is actively searching for a contractor.</p>
            </div>
            <div className="service-card">
              <div className="num">02</div>
              <h4>Local SEO</h4>
              <p>Sustained organic visibility for regional and multi-branch contractors, paired with review generation.</p>
            </div>
            <div className="service-card">
              <div className="num">03</div>
              <h4>LinkedIn ABM</h4>
              <p>Account-based targeting for commercial decision-makers, developers and specifiers with long sales cycles.</p>
            </div>
            <div className="service-card">
              <div className="num">04</div>
              <h4>Conversion Landing Pages</h4>
              <p>Sector-specific pages built to qualify, not just capture — cutting unqualified form fills before they reach your CRM.</p>
            </div>
            <div className="service-card">
              <div className="num">05</div>
              <h4>Call Tracking &amp; Recording</h4>
              <p>Every enquiry attributed to source and scored for quality, so cost-per-lead reflects real opportunities, not form spam.</p>
            </div>
            <div className="service-card">
              <div className="num">06</div>
              <h4>CRM Integration &amp; Scoring</h4>
              <p>Leads routed and scored directly in your CRM, with automation for follow-up and pipeline forecasting.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="ecommerce" style={{ background: "var(--paper-raise)" }}>
        <div className="wrap reveal">
          <div className="section-label">Also available</div>
          <h2>Ecommerce &amp; Social Commerce</h2>
          <p className="section-intro">
            Shopify, Meta Commerce and conversion systems for physical-product brands.
          </p>

          <div className="service-grid">
            <div className="service-card">
              <div className="num">01</div>
              <h4>Shopify Commerce</h4>
              <p>Storefronts, product architecture and merchandising.</p>
            </div>
            <div className="service-card">
              <div className="num">02</div>
              <h4>Meta Commerce</h4>
              <p>Commerce Manager, Facebook Shop and Instagram Shopping, synced to your catalogue.</p>
            </div>
            <div className="service-card">
              <div className="num">03</div>
              <h4>Tracking</h4>
              <p>Pixel and Conversions API, configured and deduplicated.</p>
            </div>
            <div className="service-card">
              <div className="num">04</div>
              <h4>Paid Social</h4>
              <p>Catalogue campaigns, prospecting, retargeting and product launches.</p>
            </div>
            <div className="service-card">
              <div className="num">05</div>
              <h4>Social Creative</h4>
              <p>Reusable branded templates for Instagram and Facebook.</p>
            </div>
            <div className="service-card">
              <div className="num">06</div>
              <h4>Training &amp; Handover</h4>
              <p>Documentation and walkthroughs so your team can run it.</p>
            </div>
          </div>

          <div className="hero-ctas" style={{ marginTop: 44 }}>
            <Link href="/ecommerce" className="btn-primary">Explore Ecommerce →</Link>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap reveal">
          <div className="section-label" style={{ textAlign: "center" }}>Next step</div>
          <h2>Tell us your sector. We&apos;ll tell you which of these six actually apply.</h2>
          <div className="hero-ctas">
            <Link href="/contact" className="btn-primary">Request a project →</Link>
            <Link href="/case-studies" className="btn-ghost">See case studies</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
