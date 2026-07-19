import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";

export default function Home() {
  return (
    <>
      <Header active="home" />
      <RevealObserver />

      <section className="hero">
        <span className="crosshair cx-tl"></span>
        <span className="crosshair cx-tr"></span>
        <div className="wrap">
          <div className="eyebrow">Marketing for construction &amp; trades</div>
          <h1>
            You've been sold impressions.
            <br />
            We sign contracts for <em>qualified leads.</em>
          </h1>
          <p className="lead">
            Visuioration builds and runs lead generation for construction, civil engineering and property
            businesses — with the volume, cost-per-lead and pipeline targets agreed in writing before a single
            pound is spent.
          </p>
          <div className="hero-ctas">
            <Link href="/contact" className="btn-primary">Request a project →</Link>
            <a href="#guarantee" className="btn-ghost">See how the guarantee works</a>
          </div>
          <div className="dim-rail reveal">
            <div className="dim-stat"><span className="dim-num">£21M+</span><span className="dim-label">PIPELINE GENERATED</span></div>
            <div className="dim-stat"><span className="dim-num">990+</span><span className="dim-label">QUALIFIED OPPORTUNITIES</span></div>
            <div className="dim-stat"><span className="dim-num">48%</span><span className="dim-label">AVG. COST-PER-LEAD REDUCTION</span></div>
            <div className="dim-stat"><span className="dim-num">9</span><span className="dim-label">CONSTRUCTION SECTORS SERVED</span></div>
          </div>
        </div>
      </section>

      <section id="problem">
        <div className="wrap reveal">
          <div className="section-label">The problem</div>
          <h2>Most agencies report activity. You need forecastable projects.</h2>
          <p className="section-intro">
            Reach and impressions don&apos;t book site surveys or win tenders. Construction businesses run on
            pipeline they can plan a crew around — which means the only report that matters is one tied to a
            number you agreed to in advance.
          </p>

          <div className="split">
            <div className="old">
              <h3>The usual agency retainer</h3>
              <ul>
                <li>Reports on clicks, reach and &quot;engagement&quot;</li>
                <li>No agreed lead volume or cost target</li>
                <li>Generic landing pages reused across clients</li>
                <li>No consequence if targets are missed</li>
              </ul>
            </div>
            <div className="new">
              <h3>The Visuioration model</h3>
              <ul>
                <li>Contracted qualified-lead and CPL targets</li>
                <li>Monthly reporting against those targets, not vanity metrics</li>
                <li>Landing pages and call tracking built for your sector</li>
                <li>Written remedy clause if targets are missed</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="process">
        <div className="wrap reveal">
          <div className="section-label">How it works</div>
          <h2>Four stages, in order — targets agreed before spend begins.</h2>
          <p className="section-intro">
            This is a fixed sequence. Nothing goes live until the numbers in stage two are signed off.{" "}
            <Link href="/services" style={{ color: "var(--rebar)", textDecoration: "underline" }}>
              See full service detail →
            </Link>
          </p>

          <div className="process">
            <div className="step">
              <div className="step-num">01<span>Audit</span></div>
              <div>
                <h4>Pipeline audit</h4>
                <p>We review your current lead sources, historic cost-per-lead, sales-cycle length and close rate to set a realistic baseline.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">02<span>Contract</span></div>
              <div>
                <h4>Contracted targets</h4>
                <p>Qualified-lead volume, cost-per-lead ceiling and reporting cadence are agreed and written into the engagement before any campaign is built.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">03<span>Build</span></div>
              <div>
                <h4>Channel build</h4>
                <p>We build the specific mix your sector responds to.</p>
                <span className="tag">Google Search</span><span className="tag">Local SEO</span><span className="tag">LinkedIn ABM</span><span className="tag">Landing pages</span><span className="tag">Call tracking</span><span className="tag">CRM integration</span>
              </div>
            </div>
            <div className="step">
              <div className="step-num">04<span>Report</span></div>
              <div>
                <h4>Accountability reporting</h4>
                <p>Every month you see performance against the contracted numbers, not against reach. If we miss, the remedy clause activates — not a conversation about &quot;brand awareness.&quot;</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="proof">
        <div className="wrap reveal">
          <div className="proof-head">
            <div>
              <div className="section-label">Proof</div>
              <h2 style={{ marginBottom: 0 }}>Results from construction sector campaigns</h2>
            </div>
            <p className="section-intro" style={{ marginBottom: 0 }}>
              A sample of contracted outcomes.{" "}
              <Link href="/case-studies" style={{ color: "var(--rebar)", textDecoration: "underline" }}>
                See all case studies →
              </Link>
            </p>
          </div>

          <div className="proof-grid">
            <div className="proof-card">
              <div className="sector">Residential Construction</div>
              <h4>Referral-dependent builder, no forecastable pipeline</h4>
              <div className="proof-metric"><span className="n">126</span><span className="l">QUALIFIED ENQUIRIES / 120 DAYS</span></div>
              <div className="proof-metric"><span className="n">£1.1M</span><span className="l">PIPELINE GENERATED</span></div>
              <div className="cpl">CPL: £147 → <b>£58</b></div>
            </div>
            <div className="proof-card">
              <div className="sector">Commercial Contractor</div>
              <h4>Low visibility, insufficient tender invitations</h4>
              <div className="proof-metric"><span className="n">24</span><span className="l">TENDER INVITATIONS / 6 MONTHS</span></div>
              <div className="proof-metric"><span className="n">£3.2M</span><span className="l">PIPELINE VALUE</span></div>
              <div className="cpl">Cost per opportunity: <b>−42%</b></div>
            </div>
            <div className="proof-card">
              <div className="sector">Civil Engineering</div>
              <h4>Needed a consistent commercial project pipeline</h4>
              <div className="proof-metric"><span className="n">52</span><span className="l">QUALIFIED OPPORTUNITIES / 5 MONTHS</span></div>
              <div className="proof-metric"><span className="n">£4.8M</span><span className="l">SALES PIPELINE</span></div>
              <div className="cpl">Cost per opportunity: <b>−34%</b></div>
            </div>
          </div>
        </div>
      </section>

      <section id="guarantee" className="guarantee">
        <span className="crosshair cx-tl" style={{ color: "var(--navy-line)" }}></span>
        <span className="crosshair cx-br" style={{ color: "var(--navy-line)" }}></span>
        <div className="wrap reveal">
          <div>
            <div className="section-label" style={{ color: "var(--amber)" }}>The guarantee</div>
            <h2>The accountability clause sits in the contract, not the pitch deck.</h2>
            <p className="section-intro">
              Before work starts, we write your qualified-lead target, your cost-per-lead ceiling and the
              reporting schedule into the engagement letter. If a monthly target is missed for reasons within
              our control, the remedy is spelled out there too — extended scope at no charge, or a fee
              adjustment.
            </p>
          </div>
          <div className="guarantee-doc">
            <div className="row"><span>Qualified lead target</span><span>Agreed pre-launch</span></div>
            <div className="row"><span>Cost-per-lead ceiling</span><span>Agreed pre-launch</span></div>
            <div className="row"><span>Reporting cadence</span><span>Monthly, against contract</span></div>
            <div className="row"><span>Missed target remedy</span><span>Written into engagement</span></div>
            <div className="row"><span>Reporting basis</span><span>Leads, not impressions</span></div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap reveal">
          <div className="section-label" style={{ textAlign: "center" }}>Start here</div>
          <h2>Bring us your current cost-per-lead. We&apos;ll tell you what a contracted target looks like.</h2>
          <p className="section-intro">
            A pipeline audit takes one call. You&apos;ll leave with a realistic lead-volume and CPL target for
            your sector before anything is signed.
          </p>
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
