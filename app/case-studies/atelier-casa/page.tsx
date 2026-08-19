import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";
import CommerceArchitecture from "@/components/CommerceArchitecture";
import SocialGrid from "@/components/SocialGrid";
import ProductCard from "@/components/ProductCard";

export const metadata = {
  title: "ATELIER CASA — Shopify & Meta Commerce | Visuioration",
  description:
    "A premium homeware commerce system connecting product merchandising, social discovery and paid acquisition.",
};

const architecture = [
  { num: "01", title: "Shopify", detail: "Storefront, collections & product architecture" },
  { num: "02", title: "Product catalogue", detail: "Structured feed with variant & material data" },
  { num: "03", title: "Meta Commerce", detail: "Catalogue connected via Commerce Manager" },
  { num: "04", title: "Instagram / Facebook", detail: "Shop tab & product tagging live" },
  { num: "05", title: "Meta Ads", detail: "Catalogue & prospecting campaigns" },
  { num: "06", title: "Pixel + CAPI", detail: "Deduplicated browser & server tracking" },
  { num: "07", title: "Conversion", detail: "Checkout event captured" },
  { num: "08", title: "Reporting", detail: "Performance measured against catalogue spend" },
];

const socialPosts = [
  { num: "01", label: "Product hero — Arc Table Lamp" },
  { num: "02", label: "Lifestyle — living room set" },
  { num: "03", label: "Product detail — ceramic texture" },
  { num: "04", label: "Campaign statement" },
  { num: "05", label: "Product launch — Linear Side Table" },
  { num: "06", label: "Product education — materials" },
  { num: "07", label: "Close-up — Mono Wall Light" },
  { num: "08", label: "Promotion" },
  { num: "09", label: "Shop collection" },
];

const products = [
  { name: "Arc Table Lamp", price: "£185" },
  { name: "Form Ceramic Vase", price: "£96" },
  { name: "Linear Side Table", price: "£420" },
  { name: "Mono Wall Light", price: "£260" },
];

export default function AtelierCasa() {
  return (
    <>
      <Header active="case-studies" />
      <RevealObserver />

      <section className="page-head">
        <span className="crosshair cx-tl" style={{ color: "var(--navy-line)" }}></span>
        <div className="wrap">
          <div className="case-label">Independent Portfolio Project</div>
          <div className="eyebrow">Premium Home Commerce</div>
          <h1>Atelier Casa</h1>
          <p>
            A premium homeware commerce system connecting product merchandising, social discovery and paid
            acquisition.
          </p>
          <div className="case-tags">
            <span className="tag">Shopify</span>
            <span className="tag">Meta Commerce</span>
            <span className="tag">Social Commerce</span>
            <span className="tag">Ecommerce UX</span>
          </div>
        </div>
      </section>

      <section id="overview">
        <div className="wrap reveal">
          <div className="section-label">01 · Project overview</div>
          <h2>An original, fictional homeware brand built to demonstrate commerce architecture.</h2>
          <p className="section-intro">
            Atelier Casa is a contemporary, architectural homeware brand — an independent portfolio project
            created to show how a Shopify storefront, product catalogue and Meta Commerce presence can be
            designed as one connected system rather than three separate tools.
          </p>
        </div>
      </section>

      <section id="objective" style={{ background: "var(--paper-raise)" }}>
        <div className="wrap reveal">
          <div className="section-label">02 · Objective</div>
          <h2>Design a product journey that reads as premium at every stage.</h2>
          <p className="section-intro">
            The objective was a commerce system where product photography, merchandising, social discovery and
            paid acquisition all reinforce the same editorial, architectural brand character — from the first
            Instagram impression through to Shopify checkout.
          </p>
        </div>
      </section>

      <section id="architecture">
        <div className="wrap reveal">
          <div className="section-label">03 · Commerce architecture</div>
          <h2>From product upload to reporting, in one sequence.</h2>
          <CommerceArchitecture steps={architecture} />
        </div>
      </section>

      <section id="shopify-experience" style={{ background: "var(--paper-raise)" }}>
        <div className="wrap reveal">
          <div className="section-label">04 · Shopify experience</div>
          <h2>Homepage, collection and product pages built around neutral, editorial imagery.</h2>
          <p className="section-intro">
            The storefront concept uses a restrained palette and generous whitespace to let product photography
            carry the page — a homepage that leads with collections rather than promotions, a collection grid
            with minimal chrome, and product pages built around material and dimension detail.
          </p>
          <div className="spec-grid">
            <div className="spec-panel">
              <div className="spec-title">Homepage concept</div>
              <div className="row"><span>Layout</span><span>Full-bleed collection lead</span></div>
              <div className="row"><span>Navigation</span><span>Collections-first</span></div>
              <div className="row"><span>Tone</span><span>Editorial, minimal chrome</span></div>
            </div>
            <div className="spec-panel">
              <div className="spec-title">Product page concept</div>
              <div className="row"><span>Primary detail</span><span>Material & dimensions</span></div>
              <div className="row"><span>Variants</span><span>Finish selector</span></div>
              <div className="row"><span>Mobile</span><span>Single-column, sticky CTA</span></div>
            </div>
          </div>
        </div>
      </section>

      <section id="product-system">
        <div className="wrap reveal">
          <div className="section-label">05 · Product system</div>
          <h2>A small, considered catalogue.</h2>
          <p className="section-intro">
            Four original product concepts used to demonstrate collection structure, variant handling and
            catalogue merchandising.
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
          <h2>An Instagram grid built to support the catalogue.</h2>
          <p className="section-intro">
            A concept grid showing how hero, lifestyle, detail and launch content sit together as one system,
            each post tagged back into the Shopify catalogue via Meta Shopping.
          </p>
          <SocialGrid posts={socialPosts} />
        </div>
      </section>

      <section id="meta-ads">
        <div className="wrap reveal">
          <div className="section-label">07 · Meta ads</div>
          <h2>Catalogue-led campaigns, structured by collection.</h2>
          <div className="spec-panel">
            <div className="spec-title">Campaign structure — implementation concept</div>
            <div className="row"><span>Prospecting</span><span>Broad catalogue, collection sets</span></div>
            <div className="row"><span>Retargeting</span><span>Viewed & add-to-cart audiences</span></div>
            <div className="row"><span>Launch campaigns</span><span>Single-product creative</span></div>
            <div className="row"><span>Placement</span><span>Instagram & Facebook feed + Stories</span></div>
          </div>
        </div>
      </section>

      <section id="tracking" style={{ background: "var(--paper-raise)" }}>
        <div className="wrap reveal">
          <div className="section-label">08 · Tracking</div>
          <h2>A Pixel + CAPI model built to survive browser restrictions.</h2>
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
          <h2>A neutral, architectural palette.</h2>
          <div className="swatch-row">
            <div className="swatch"><div className="chip" style={{ background: "#2A2724" }}></div><span className="lbl">Charcoal</span></div>
            <div className="swatch"><div className="chip" style={{ background: "#EFEDE6" }}></div><span className="lbl">Warm White</span></div>
            <div className="swatch"><div className="chip" style={{ background: "#B08A5E" }}></div><span className="lbl">Terracotta</span></div>
            <div className="swatch"><div className="chip" style={{ background: "#8B8B84" }}></div><span className="lbl">Stone</span></div>
          </div>
        </div>
      </section>

      <section id="responsive" style={{ background: "var(--paper-raise)" }}>
        <div className="wrap reveal">
          <div className="section-label">10 · Responsive experience</div>
          <h2>Recomposed, not shrunk.</h2>
          <div className="spec-panel">
            <div className="row"><span>Desktop — 1440px</span><span>Multi-column collection grid</span></div>
            <div className="row"><span>Tablet — 1024px</span><span>2-column grid, sticky nav</span></div>
            <div className="row"><span>Mobile — 390px</span><span>Single column, sticky add-to-cart</span></div>
          </div>
        </div>
      </section>

      <section id="implementation">
        <div className="wrap reveal">
          <div className="section-label">11 · Implementation</div>
          <h2>What was actually built.</h2>
          <ul style={{ maxWidth: 620, color: "var(--concrete)", fontSize: 15, paddingLeft: 20 }}>
            <li style={{ marginBottom: 10 }}>Created a structured product catalogue.</li>
            <li style={{ marginBottom: 10 }}>Designed reusable social templates.</li>
            <li style={{ marginBottom: 10 }}>Created a conversion-focused product journey.</li>
            <li style={{ marginBottom: 10 }}>Created a Meta commerce architecture.</li>
          </ul>
        </div>
      </section>

      <section id="outcome" style={{ background: "var(--paper-raise)" }}>
        <div className="wrap reveal">
          <div className="section-label">12 · Project outcome</div>
          <h2>A working demonstration of a connected commerce system.</h2>
          <p className="section-intro">
            Developed a catalogue campaign framework and a Pixel + CAPI tracking model designed to hold up as an
            implementation reference for physical-product brands considering the same architecture.
          </p>
          <div className="disclaimer">
            13 · Disclaimer — Atelier Casa is an original, fictional brand created as an independent portfolio
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
