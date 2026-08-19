import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";
import CommerceArchitecture from "@/components/CommerceArchitecture";
import SocialGrid from "@/components/SocialGrid";

export const metadata = {
  title: "Shopify & Meta Ecommerce Growth | Visuioration",
  description:
    "Shopify, Meta Commerce, social shopping, paid acquisition and conversion tracking systems built for ecommerce growth.",
};

const commerceFlow = [
  { num: "01", title: "Add product", detail: "Shopify product created" },
  { num: "02", title: "Catalogue", detail: "Product synchronises into commerce catalogue" },
  { num: "03", title: "Social", detail: "Product becomes usable across Facebook and Instagram" },
  { num: "04", title: "Creative", detail: "Product presented through reusable branded templates" },
  { num: "05", title: "Campaign", detail: "Meta campaign launches" },
  { num: "06", title: "Tracking", detail: "Pixel + CAPI capture conversion events" },
  { num: "07", title: "Reporting", detail: "Performance becomes measurable" },
];

const socialPosts = [
  { num: "01", label: "Product hero" },
  { num: "02", label: "Lifestyle" },
  { num: "03", label: "Product detail" },
  { num: "04", label: "Campaign statement" },
  { num: "05", label: "Product launch" },
  { num: "06", label: "Product education" },
  { num: "07", label: "Close-up" },
  { num: "08", label: "Promotion" },
  { num: "09", label: "Shop collection" },
];

const socialFlow = [
  { num: "01", title: "Instagram post", detail: "Discovery via feed or story" },
  { num: "02", title: "Product tag", detail: "Tagged product surfaces on tap" },
  { num: "03", title: "Product", detail: "Product detail within Meta Shop" },
  { num: "04", title: "Shopify", detail: "Handoff to full storefront" },
  { num: "05", title: "Checkout", detail: "Conversion completed & tracked" },
];

export default function Ecommerce() {
  return (
    <>
      <Header active="services" />
      <RevealObserver />

      <section className="page-head">
        <span className="crosshair cx-tl" style={{ color: "var(--navy-line)" }}></span>
        <div className="wrap">
          <div className="eyebrow">Shopify × Meta</div>
          <h1>Commerce systems, not just online stores.</h1>
          <p>
            We connect your storefront, product catalogue, social channels and paid acquisition into one
            measurable commerce system.
          </p>
          <p style={{ marginTop: 14, maxWidth: 620 }}>
            From Shopify catalogue architecture and Meta Commerce setup to product creative, social shopping and
            conversion tracking, we build ecommerce systems designed around measurable growth.
          </p>
          <div className="hero-ctas" style={{ marginTop: 32, marginBottom: 0 }}>
            <Link href="/contact" className="btn-primary">Start an Ecommerce Project →</Link>
            <Link href="/case-studies" className="btn-ghost">View Commerce Work</Link>
          </div>
        </div>
      </section>

      <section id="capabilities">
        <div className="wrap reveal">
          <div className="section-label">Ecommerce services</div>
          <h2>Six capabilities, deployed as one connected system.</h2>
          <p className="section-intro">
            Shopify, Meta Commerce, tracking, paid social, creative and training — built for physical-product
            brands, not sold as a generic social-media retainer.
          </p>

          <div className="service-grid">
            <div className="service-card">
              <div className="num">01</div>
              <h4>Shopify Commerce</h4>
              <p>Conversion-focused Shopify storefronts, product architecture, collections, merchandising and product experiences.</p>
              <div style={{ marginTop: 14 }}>
                <span className="tag">Storefronts</span>
                <span className="tag">Product catalogue</span>
                <span className="tag">Collections</span>
                <span className="tag">Variants</span>
                <span className="tag">Product pages</span>
                <span className="tag">Conversion UX</span>
                <span className="tag">Mobile commerce</span>
              </div>
            </div>
            <div className="service-card">
              <div className="num">02</div>
              <h4>Meta Commerce</h4>
              <p>Connect your Shopify catalogue with Facebook and Instagram so products can move naturally from store to social.</p>
              <div style={{ marginTop: 14 }}>
                <span className="tag">Business Portfolio</span>
                <span className="tag">Commerce Manager</span>
                <span className="tag">Facebook Shop</span>
                <span className="tag">Instagram Shopping</span>
                <span className="tag">Catalogue sync</span>
                <span className="tag">Domain verification</span>
                <span className="tag">Asset permissions</span>
              </div>
            </div>
            <div className="service-card">
              <div className="num">03</div>
              <h4>Tracking</h4>
              <p>Build reliable measurement across browser and server-side events.</p>
              <div style={{ marginTop: 14 }}>
                <span className="tag">Meta Pixel</span>
                <span className="tag">Conversions API</span>
                <span className="tag">Event config</span>
                <span className="tag">Deduplication</span>
                <span className="tag">Conversion testing</span>
                <span className="tag">Tracking audits</span>
              </div>
            </div>
            <div className="service-card">
              <div className="num">04</div>
              <h4>Paid Social</h4>
              <p>Turn your catalogue and creative into structured acquisition campaigns.</p>
              <div style={{ marginTop: 14 }}>
                <span className="tag">Meta Ads</span>
                <span className="tag">Catalogue campaigns</span>
                <span className="tag">Prospecting</span>
                <span className="tag">Retargeting</span>
                <span className="tag">Product launches</span>
                <span className="tag">Creative testing</span>
              </div>
            </div>
            <div className="service-card">
              <div className="num">05</div>
              <h4>Social Creative</h4>
              <p>Create a consistent visual system that makes products look premium across Instagram and Facebook.</p>
              <div style={{ marginTop: 14 }}>
                <span className="tag">Instagram grids</span>
                <span className="tag">Product posts</span>
                <span className="tag">Stories</span>
                <span className="tag">Story templates</span>
                <span className="tag">Promotional graphics</span>
                <span className="tag">Reusable templates</span>
              </div>
            </div>
            <div className="service-card">
              <div className="num">06</div>
              <h4>Training &amp; Handover</h4>
              <p>Leave your team with a system they can actually operate.</p>
              <div style={{ marginTop: 14 }}>
                <span className="tag">Documentation</span>
                <span className="tag">Screen-share training</span>
                <span className="tag">Video walkthroughs</span>
                <span className="tag">Catalogue management</span>
                <span className="tag">Tracking checks</span>
                <span className="tag">Follow-up support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="flow">
        <div className="wrap reveal">
          <div className="section-label">Commerce flow</div>
          <h2>From product upload to conversion.</h2>
          <p className="section-intro">
            A single connected sequence — every product moves through the same seven stages, from Shopify to a
            measured conversion.
          </p>
          <CommerceArchitecture steps={commerceFlow} />
        </div>
      </section>

      <section id="social-commerce" style={{ background: "var(--paper-raise)" }}>
        <div className="wrap reveal">
          <div className="section-label">Social commerce</div>
          <h2>A premium Instagram grid, built to sell.</h2>
          <p className="section-intro">
            A concept grid for a fictional ecommerce brand, showing how product content, launches and promotion
            sit together as one system rather than nine disconnected posts.
          </p>
          <SocialGrid posts={socialPosts} />
          <div className="social-journey">
            <span>Discover</span><span className="arrow">→</span>
            <span>Explore</span><span className="arrow">→</span>
            <span>Shop</span><span className="arrow">→</span>
            <span>Convert</span>
          </div>
          <CommerceArchitecture steps={socialFlow} compact />
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap reveal">
          <div className="section-label" style={{ textAlign: "center" }}>Start here</div>
          <h2>Tell us about your catalogue. We&apos;ll tell you what a commerce system looks like.</h2>
          <p className="section-intro">
            One call to walk through your Shopify setup, your current Meta Commerce status and where tracking is
            leaking conversions.
          </p>
          <div className="hero-ctas">
            <Link href="/contact" className="btn-primary">Start an Ecommerce Project →</Link>
            <Link href="/case-studies" className="btn-ghost">View Commerce Work</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
