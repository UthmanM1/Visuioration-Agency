import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";
import CommerceArchitecture from "@/components/CommerceArchitecture";
import SocialGrid from "@/components/SocialGrid";
import ProductCard from "@/components/ProductCard";

export const metadata = {
  title: "ARCHIVE / 01 — Instagram-First Commerce | Visuioration",
  description:
    "An Instagram-first commerce experience designed around discovery, product storytelling and a seamless transition into Shopify.",
};

const journey = [
  { num: "01", title: "Instagram", detail: "Discovery via feed & Reels" },
  { num: "02", title: "Discover", detail: "Curated archive content" },
  { num: "03", title: "Shop the Look", detail: "Multi-product tagged post" },
  { num: "04", title: "Product", detail: "Product detail within Meta Shop" },
  { num: "05", title: "Shopify", detail: "Full storefront handoff" },
  { num: "06", title: "Checkout", detail: "Conversion completed & tracked" },
];

const socialPosts = [
  { num: "01", label: "Archive find — hero" },
  { num: "02", label: "Shop the Look" },
  { num: "03", label: "Product detail" },
  { num: "04", label: "Provenance story" },
  { num: "05", label: "New arrival" },
  { num: "06", label: "Styling guide" },
  { num: "07", label: "Close-up — texture" },
  { num: "08", label: "Curator's pick" },
  { num: "09", label: "Shop collection" },
];

const products = [
  { name: "Archive Chair, No.14", price: "£640" },
  { name: "Salvaged Brass Sconce", price: "£145" },
  { name: "Studio Enamel Vessel", price: "£78" },
  { name: "Reclaimed Oak Stool", price: "£210" },
];

export default function Archive01() {
  return (
    <>
      <Header active="case-studies" />
      <RevealObserver />

      <section className="page-head">
        <span className="crosshair cx-tl" style={{ color: "var(--navy-line)" }}></span>
        <div className="wrap">
          <div className="case-label">Independent Portfolio Project</div>
          <div className="eyebrow">Instagram-First Commerce</div>
          <h1>Archive / 01</h1>
          <p>
            An Instagram-first commerce experience designed around discovery, product storytelling and a
            seamless transition into Shopify.
          </p>
          <div className="case-tags">
            <span className="tag">Instagram</span>
            <span className="tag">Shopify</span>
            <span className="tag">Social Commerce</span>
            <span className="tag">UX</span>
          </div>
        </div>
      </section>

      <section id="overview">
        <div className="wrap reveal">
          <div className="section-label">01 · Project overview</div>
          <h2>An original, fictional vintage & design marketplace built for discovery.</h2>
          <p className="section-intro">
            Archive / 01 is a curated vintage and design-object marketplace concept — an independent portfolio
            project used to show a commerce experience that starts on Instagram and treats the storefront as the
            second step, not the first.
          </p>
        </div>
      </section>

      <section id="objective" style={{ background: "var(--paper-raise)" }}>
        <div className="wrap reveal">
          <div className="section-label">02 · Objective</div>
          <h2>Make discovery the front door, not the storefront.</h2>
          <p className="section-intro">
            The objective was a journey where curated, story-led content on Instagram carries as much weight as
            the product page itself — every archive find gets a story before it gets a price, with Shopify
            handling the transactional close.
          </p>
        </div>
      </section>

      <section id="architecture">
        <div className="wrap reveal">
          <div className="section-label">03 · Commerce architecture</div>
          <h2>Instagram to checkout, in six stages.</h2>
          <CommerceArchitecture steps={journey} />
        </div>
      </section>

      <section id="shopify-experience" style={{ background: "var(--paper-raise)" }}>
        <div className="wrap reveal">
          <div className="section-label">04 · Shopify experience</div>
          <h2>A mobile storefront built to continue an Instagram story, not restart it.</h2>
          <p className="section-intro">
            The storefront concept mirrors the archive aesthetic of the Instagram feed, so a visitor arriving
            from a tagged post lands on a product page that feels like a continuation of what they just saw, not
            a generic ecommerce template.
          </p>
          <div className="spec-grid">
            <div className="spec-panel">
              <div className="spec-title">Product hotspot concept</div>
              <div className="row"><span>Trigger</span><span>Tap on tagged image region</span></div>
              <div className="row"><span>Result</span><span>Inline product card</span></div>
              <div className="row"><span>Continuity</span><span>Archive story carried into PDP</span></div>
            </div>
            <div className="spec-panel">
              <div className="spec-title">Mobile storefront concept</div>
              <div className="row"><span>Layout</span><span>Single column, archive-style imagery</span></div>
              <div className="row"><span>Provenance</span><span>Story block above specs</span></div>
              <div className="row"><span>Checkout</span><span>Sticky, single-step</span></div>
            </div>
          </div>
        </div>
      </section>

      <section id="product-system">
        <div className="wrap reveal">
          <div className="section-label">05 · Product system</div>
          <h2>A rotating archive, not a static catalogue.</h2>
          <p className="section-intro">
            A small set of original, fictional archive pieces used to demonstrate one-of-a-kind and
            limited-availability merchandising.
          </p>
          <div className="product-grid">
            {products.map((p) => (
              <ProductCard key={p.name} name={p.name} price={p.price} />
            ))}
          </div>
        </div>
      </section>

      <section id="social-commerce" style={{ background: "var(--paper-raise)" }}>
        <div className="wrap reveal">
          <div className="section-label">06 · Social commerce</div>
          <h2>An Instagram feed built as the primary shop window.</h2>
          <p className="section-intro">
            A concept grid combining archive finds, styling guides and shop-the-look content, tagged directly
            into the Shopify catalogue.
          </p>
          <SocialGrid posts={socialPosts} />
          <div className="social-journey" style={{ marginTop: 24 }}>
            <span>Discover</span><span className="arrow">→</span>
            <span>Explore</span><span className="arrow">→</span>
            <span>Shop</span><span className="arrow">→</span>
            <span>Convert</span>
          </div>
        </div>
      </section>

      <section id="meta-ads">
        <div className="wrap reveal">
          <div className="section-label">07 · Meta ads</div>
          <h2>Story-led prospecting, provenance-led retargeting.</h2>
          <div className="spec-panel">
            <div className="spec-title">Campaign structure — implementation concept</div>
            <div className="row"><span>Prospecting</span><span>Curated Reels & carousel content</span></div>
            <div className="row"><span>Retargeting</span><span>Viewed & saved-item audiences</span></div>
            <div className="row"><span>New arrivals</span><span>Weekly drop campaign</span></div>
            <div className="row"><span>Placement</span><span>Instagram feed, Reels & Stories</span></div>
          </div>
        </div>
      </section>

      <section id="tracking" style={{ background: "var(--paper-raise)" }}>
        <div className="wrap reveal">
          <div className="section-label">08 · Tracking</div>
          <h2>Tracking built for a low-frequency, high-value catalogue.</h2>
          <div className="spec-panel">
            <div className="spec-title">Tracking framework — implementation concept</div>
            <div className="row"><span>Client-side</span><span>Meta Pixel</span></div>
            <div className="row"><span>Server-side</span><span>Conversions API</span></div>
            <div className="row"><span>Deduplication</span><span>Shared event ID</span></div>
            <div className="row"><span>Core events</span><span>ViewContent, AddToCart, Purchase</span></div>
          </div>
        </div>
      </section>

      <section id="design-system">
        <div className="wrap reveal">
          <div className="section-label">09 · Design system</div>
          <h2>An archive-toned, tactile palette.</h2>
          <div className="swatch-row">
            <div className="swatch"><div className="chip" style={{ background: "#3B2F26" }}></div><span className="lbl">Walnut</span></div>
            <div className="swatch"><div className="chip" style={{ background: "#E8E2D6" }}></div><span className="lbl">Parchment</span></div>
            <div className="swatch"><div className="chip" style={{ background: "#8C6A4A" }}></div><span className="lbl">Brass</span></div>
            <div className="swatch"><div className="chip" style={{ background: "#4E5A52" }}></div><span className="lbl">Verdigris</span></div>
          </div>
        </div>
      </section>

      <section id="responsive" style={{ background: "var(--paper-raise)" }}>
        <div className="wrap reveal">
          <div className="section-label">10 · Responsive experience</div>
          <h2>Recomposed, not shrunk.</h2>
          <div className="spec-panel">
            <div className="row"><span>Desktop — 1440px</span><span>Archive grid + story sidebar</span></div>
            <div className="row"><span>Tablet — 1024px</span><span>Stacked grid, condensed story</span></div>
            <div className="row"><span>Mobile — 390px</span><span>Single column, tap-to-shop hotspots</span></div>
          </div>
        </div>
      </section>

      <section id="implementation">
        <div className="wrap reveal">
          <div className="section-label">11 · Implementation</div>
          <h2>What was actually built.</h2>
          <ul style={{ maxWidth: 620, color: "var(--concrete)", fontSize: 15, paddingLeft: 20 }}>
            <li style={{ marginBottom: 10 }}>Created a conversion-focused product journey.</li>
            <li style={{ marginBottom: 10 }}>Designed reusable social templates.</li>
            <li style={{ marginBottom: 10 }}>Created a structured product catalogue.</li>
            <li style={{ marginBottom: 10 }}>Created a Meta commerce architecture.</li>
          </ul>
        </div>
      </section>

      <section id="outcome" style={{ background: "var(--paper-raise)" }}>
        <div className="wrap reveal">
          <div className="section-label">12 · Project outcome</div>
          <h2>A working demonstration of a discovery-led commerce journey.</h2>
          <p className="section-intro">
            Designed a Pixel + CAPI tracking model and a Meta commerce architecture built to hold up as an
            implementation reference for curated, story-led product brands.
          </p>
          <div className="disclaimer">
            13 · Disclaimer — Archive / 01 is an original, fictional brand created as an independent portfolio
            project by Visuioration. It is not a real client, and no interfaces shown reproduce real Shopify or
            Meta account data.
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap reveal">
          <div className="section-label" style={{ textAlign: "center" }}>Next step</div>
          <h2>Considering a similar commerce system for your catalogue?</h2>
          <div className="hero-ctas">
            <Link href="/contact" className="btn-primary">Start an Ecommerce Project →</Link>
            <Link href="/ecommerce" className="btn-ghost">Back to Ecommerce</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
