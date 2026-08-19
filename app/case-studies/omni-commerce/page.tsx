import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";
import CommerceArchitecture from "@/components/CommerceArchitecture";
import ProductCard from "@/components/ProductCard";

export const metadata = {
  title: "OMNI / COMMERCE OS — Omnichannel Ecommerce Architecture | Visuioration",
  description:
    "A technical commerce architecture connecting catalogue, inventory, social commerce, advertising and conversion tracking.",
};

const intake = [
  { num: "01", title: "Product", detail: "Technical equipment product created" },
  { num: "02", title: "Shopify", detail: "Storefront & source of catalogue truth" },
  { num: "03", title: "Catalogue", detail: "Structured feed with SKU-level data" },
  { num: "04", title: "Inventory", detail: "Stock synced across every channel" },
];

const outflow = [
  { num: "05", title: "Meta Ads", detail: "Catalogue campaigns across synced channels" },
  { num: "06", title: "Pixel + CAPI", detail: "Deduplicated conversion tracking" },
  { num: "07", title: "Reporting", detail: "Performance measured per channel" },
];

const products = [
  { name: "Field Pack", price: "£180" },
  { name: "Modular Equipment Case", price: "£240" },
  { name: "Tech Shell", price: "£290" },
  { name: "Field Accessory Kit", price: "£85" },
];

export default function OmniCommerce() {
  return (
    <>
      <Header active="case-studies" />
      <RevealObserver />

      <section className="page-head">
        <span className="crosshair cx-tl" style={{ color: "var(--navy-line)" }}></span>
        <div className="wrap">
          <div className="case-label">Implementation Study</div>
          <div className="eyebrow">Omnichannel Commerce Architecture</div>
          <h1>Omni / Commerce OS</h1>
          <p>
            A technical commerce architecture connecting catalogue, inventory, social commerce, advertising and
            conversion tracking.
          </p>
          <div className="case-tags">
            <span className="tag">Shopify</span>
            <span className="tag">Meta</span>
            <span className="tag">Omnichannel</span>
            <span className="tag">CAPI</span>
          </div>
        </div>
      </section>

      <section id="overview">
        <div className="wrap reveal">
          <div className="section-label">01 · Project overview</div>
          <h2>An original, fictional technical equipment retailer built to demonstrate omnichannel architecture.</h2>
          <p className="section-intro">
            Omni / Commerce OS is a technical equipment retail concept — an implementation study used to show how
            a single Shopify catalogue can drive inventory across online, social and offline channels without
            duplicating product data.
          </p>
        </div>
      </section>

      <section id="objective" style={{ background: "var(--paper-raise)" }}>
        <div className="wrap reveal">
          <div className="section-label">02 · Objective</div>
          <h2>One catalogue, five channels, no manual duplication.</h2>
          <p className="section-intro">
            The objective was a technical architecture where a single product record in Shopify stays the source
            of truth for online, Instagram, Facebook, retail and wholesale inventory — so stock levels and
            product data never drift between channels.
          </p>
        </div>
      </section>

      <section id="architecture">
        <div className="wrap reveal">
          <div className="section-label">03 · Commerce architecture</div>
          <h2>Product to inventory, then inventory to five channels.</h2>
          <CommerceArchitecture steps={intake} />

          <div className="spec-panel">
            <div className="spec-title">Inventory distribution — implementation concept</div>
            <div className="row"><span>Online</span><span>Shopify storefront</span></div>
            <div className="row"><span>Instagram</span><span>Shop tab & tagged posts</span></div>
            <div className="row"><span>Facebook</span><span>Facebook Shop</span></div>
            <div className="row"><span>Retail</span><span>Synced point-of-sale stock</span></div>
            <div className="row"><span>Wholesale</span><span>B2B ordering channel</span></div>
          </div>

          <div style={{ marginTop: 32 }}>
            <CommerceArchitecture steps={outflow} />
          </div>
        </div>
      </section>

      <section id="shopify-experience" style={{ background: "var(--paper-raise)" }}>
        <div className="wrap reveal">
          <div className="section-label">04 · Shopify experience</div>
          <h2>A storefront built as the operational core, not just the online shop.</h2>
          <p className="section-intro">
            The Shopify concept treats the storefront as the operational hub — every SKU, stock count and
            channel assignment is set once in Shopify and read everywhere else.
          </p>
          <div className="spec-grid">
            <div className="spec-panel">
              <div className="spec-title">Catalogue concept</div>
              <div className="row"><span>Structure</span><span>SKU + channel tags</span></div>
              <div className="row"><span>Variants</span><span>Size / colour / bundle</span></div>
              <div className="row"><span>Sets</span><span>Wholesale case-pack sets</span></div>
            </div>
            <div className="spec-panel">
              <div className="spec-title">Inventory interface concept</div>
              <div className="row"><span>View</span><span>Stock by channel</span></div>
              <div className="row"><span>Sync</span><span>Real-time across channels</span></div>
              <div className="row"><span>Alerts</span><span>Low-stock thresholds</span></div>
            </div>
          </div>
        </div>
      </section>

      <section id="product-system">
        <div className="wrap reveal">
          <div className="section-label">05 · Product system</div>
          <h2>A technical equipment catalogue.</h2>
          <p className="section-intro">
            Four original product concepts used to demonstrate catalogue structure across a technical,
            equipment-led product range.
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
          <h2>Social as one synced channel among five.</h2>
          <p className="section-intro">
            Rather than a standalone content grid, social commerce here is treated as one output of the same
            catalogue and inventory system — Instagram and Facebook Shop inherit stock and pricing directly from
            Shopify, with no separate content management step.
          </p>
        </div>
      </section>

      <section id="meta-ads">
        <div className="wrap reveal">
          <div className="section-label">07 · Meta ads</div>
          <h2>Campaign structure aligned to channel and stock.</h2>
          <div className="spec-panel">
            <div className="spec-title">Campaign structure — implementation concept</div>
            <div className="row"><span>Prospecting</span><span>Full catalogue, broad audience</span></div>
            <div className="row"><span>Retargeting</span><span>Viewed & add-to-cart audiences</span></div>
            <div className="row"><span>Stock-aware sets</span><span>In-stock-only product sets</span></div>
            <div className="row"><span>Wholesale</span><span>Excluded from consumer campaigns</span></div>
          </div>
        </div>
      </section>

      <section id="tracking" style={{ background: "var(--paper-raise)" }}>
        <div className="wrap reveal">
          <div className="section-label">08 · Tracking</div>
          <h2>Tracking that reports per channel, not just in aggregate.</h2>
          <div className="spec-panel">
            <div className="spec-title">Tracking framework — implementation concept</div>
            <div className="row"><span>Client-side</span><span>Meta Pixel</span></div>
            <div className="row"><span>Server-side</span><span>Conversions API</span></div>
            <div className="row"><span>Deduplication</span><span>Shared event ID</span></div>
            <div className="row"><span>Reporting split</span><span>Online vs. social-originated conversions</span></div>
          </div>
        </div>
      </section>

      <section id="design-system">
        <div className="wrap reveal">
          <div className="section-label">09 · Design system</div>
          <h2>An industrial, technical palette.</h2>
          <div className="swatch-row">
            <div className="swatch"><div className="chip" style={{ background: "#1B1E22" }}></div><span className="lbl">Graphite</span></div>
            <div className="swatch"><div className="chip" style={{ background: "#E7E5DE" }}></div><span className="lbl">Field White</span></div>
            <div className="swatch"><div className="chip" style={{ background: "#D77A2E" }}></div><span className="lbl">Safety Orange</span></div>
            <div className="swatch"><div className="chip" style={{ background: "#5A6470" }}></div><span className="lbl">Steel</span></div>
          </div>
        </div>
      </section>

      <section id="responsive" style={{ background: "var(--paper-raise)" }}>
        <div className="wrap reveal">
          <div className="section-label">10 · Responsive experience</div>
          <h2>Recomposed, not shrunk.</h2>
          <div className="spec-panel">
            <div className="row"><span>Desktop — 1440px</span><span>Catalogue + inventory side-by-side</span></div>
            <div className="row"><span>Tablet — 1024px</span><span>Stacked catalogue & channel tabs</span></div>
            <div className="row"><span>Mobile — 390px</span><span>Single column, channel filter</span></div>
          </div>
        </div>
      </section>

      <section id="implementation">
        <div className="wrap reveal">
          <div className="section-label">11 · Implementation</div>
          <h2>What was actually built.</h2>
          <ul style={{ maxWidth: 620, color: "var(--concrete)", fontSize: 15, paddingLeft: 20 }}>
            <li style={{ marginBottom: 10 }}>Created a Meta commerce architecture.</li>
            <li style={{ marginBottom: 10 }}>Created a structured product catalogue.</li>
            <li style={{ marginBottom: 10 }}>Developed a catalogue campaign framework.</li>
            <li style={{ marginBottom: 10 }}>Designed a Pixel + CAPI tracking model.</li>
          </ul>
        </div>
      </section>

      <section id="outcome" style={{ background: "var(--paper-raise)" }}>
        <div className="wrap reveal">
          <div className="section-label">12 · Project outcome</div>
          <h2>A working reference for omnichannel commerce architecture.</h2>
          <p className="section-intro">
            Designed a technical architecture and tracking model built to hold up as an implementation reference
            for equipment and technical-product retailers operating across online, social, retail and wholesale
            channels.
          </p>
          <div className="disclaimer">
            13 · Disclaimer — Omni / Commerce OS is an original, fictional brand created as an implementation
            study by Visuioration. It is not a real client, and no interfaces shown reproduce real Shopify or
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
