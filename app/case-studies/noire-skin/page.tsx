import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";
import CommerceArchitecture from "@/components/CommerceArchitecture";
import SocialGrid from "@/components/SocialGrid";
import ProductCard from "@/components/ProductCard";

export const metadata = {
  title: "NOIRÉ SKIN — DTC Ecommerce & Meta Ads | Visuioration",
  description:
    "A conversion-focused beauty commerce system connecting product education, social creative, catalogue advertising and retargeting.",
};

const architecture = [
  { num: "01", title: "Shopify", detail: "DTC storefront & subscription-ready catalogue" },
  { num: "02", title: "Product catalogue", detail: "Ingredient & routine metadata structured" },
  { num: "03", title: "Meta Commerce", detail: "Catalogue synced via Commerce Manager" },
  { num: "04", title: "Instagram / Facebook", detail: "Shop tab, product tagging, Stories" },
  { num: "05", title: "Meta Ads", detail: "Education-led prospecting + retargeting" },
  { num: "06", title: "Pixel + CAPI", detail: "Deduplicated event tracking" },
  { num: "07", title: "Conversion", detail: "Checkout & subscription events captured" },
  { num: "08", title: "Reporting", detail: "Performance measured against contracted CPA" },
];

const socialPosts = [
  { num: "01", label: "Product hero — Serum" },
  { num: "02", label: "Routine — AM / PM" },
  { num: "03", label: "Ingredient close-up" },
  { num: "04", label: "Campaign statement" },
  { num: "05", label: "Product launch — Night Cream" },
  { num: "06", label: "Product education" },
  { num: "07", label: "Texture close-up" },
  { num: "08", label: "Promotion — Daily System" },
  { num: "09", label: "Shop collection" },
];

const products = [
  { name: "No.01 Cleanser", price: "£32" },
  { name: "No.02 Serum", price: "£48" },
  { name: "No.03 Night Cream", price: "£54" },
  { name: "The Daily System", price: "£118" },
];

export default function NoireSkin() {
  return (
    <>
      <Header active="case-studies" />
      <RevealObserver />

      <section className="page-head">
        <span className="crosshair cx-tl" style={{ color: "var(--navy-line)" }}></span>
        <div className="wrap">
          <div className="case-label">Independent Portfolio Project</div>
          <div className="eyebrow">DTC Beauty Commerce</div>
          <h1>Noiré Skin</h1>
          <p>
            A conversion-focused beauty commerce system connecting product education, social creative, catalogue
            advertising and retargeting.
          </p>
          <div className="case-tags">
            <span className="tag">Shopify</span>
            <span className="tag">Meta Ads</span>
            <span className="tag">CAPI</span>
            <span className="tag">Creative</span>
          </div>
        </div>
      </section>

      <section id="overview">
        <div className="wrap reveal">
          <div className="section-label">01 · Project overview</div>
          <h2>An original, fictional skincare brand built to demonstrate a DTC commerce system.</h2>
          <p className="section-intro">
            Noiré Skin is a minimal, clinical skincare concept — an independent portfolio project used to show
            how product education, ingredient storytelling and retargeting creative can be structured around a
            single Shopify catalogue.
          </p>
        </div>
      </section>

      <section id="objective" style={{ background: "var(--paper-raise)" }}>
        <div className="wrap reveal">
          <div className="section-label">02 · Objective</div>
          <h2>Turn ingredient education into a repeatable acquisition system.</h2>
          <p className="section-intro">
            The objective was a commerce system where product education content, social creative and catalogue
            advertising all pull from the same product data — so a prospecting ad, a retargeting Story and a
            product page all make the same claim, in the same voice.
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
          <h2>A product page built around ingredient education.</h2>
          <p className="section-intro">
            The storefront concept leads with a clinical, minimal product page — ingredient breakdown, routine
            placement and a subscription option surfaced before the fold, rather than buried in a tab.
          </p>
          <div className="spec-grid">
            <div className="spec-panel">
              <div className="spec-title">Product page concept</div>
              <div className="row"><span>Primary detail</span><span>Key ingredient callout</span></div>
              <div className="row"><span>Secondary</span><span>Routine step (AM / PM)</span></div>
              <div className="row"><span>Purchase</span><span>One-time or subscribe</span></div>
            </div>
            <div className="spec-panel">
              <div className="spec-title">Ingredient section concept</div>
              <div className="row"><span>Format</span><span>Ingredient-by-ingredient breakdown</span></div>
              <div className="row"><span>Tone</span><span>Clinical, evidence-led</span></div>
              <div className="row"><span>Placement</span><span>Above the fold on product page</span></div>
            </div>
          </div>
        </div>
      </section>

      <section id="product-system">
        <div className="wrap reveal">
          <div className="section-label">05 · Product system</div>
          <h2>A four-product routine.</h2>
          <p className="section-intro">
            A small, structured catalogue built around a clear routine — three standalone products and a
            discounted system bundle.
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
          <h2>An Instagram feed built around routine and education.</h2>
          <p className="section-intro">
            A concept grid alternating hero product content with ingredient education and routine posts, each
            tagged into the Shopify catalogue via Meta Shopping.
          </p>
          <SocialGrid posts={socialPosts} />
        </div>
      </section>

      <section id="meta-ads">
        <div className="wrap reveal">
          <div className="section-label">07 · Meta ads</div>
          <h2>Education-led prospecting, retargeting on proof.</h2>
          <div className="spec-panel">
            <div className="spec-title">Campaign structure — implementation concept</div>
            <div className="row"><span>Prospecting</span><span>Ingredient education creative</span></div>
            <div className="row"><span>Retargeting</span><span>Viewed & add-to-cart audiences</span></div>
            <div className="row"><span>Bundle push</span><span>Daily System catalogue set</span></div>
            <div className="row"><span>Placement</span><span>Instagram & Facebook feed + Stories</span></div>
          </div>
        </div>
      </section>

      <section id="tracking" style={{ background: "var(--paper-raise)" }}>
        <div className="wrap reveal">
          <div className="section-label">08 · Tracking</div>
          <h2>Pixel + CAPI, tuned for subscription events.</h2>
          <div className="spec-panel">
            <div className="spec-title">Tracking framework — implementation concept</div>
            <div className="row"><span>Client-side</span><span>Meta Pixel</span></div>
            <div className="row"><span>Server-side</span><span>Conversions API</span></div>
            <div className="row"><span>Deduplication</span><span>Shared event ID</span></div>
            <div className="row"><span>Core events</span><span>ViewContent, AddToCart, Purchase, Subscribe</span></div>
          </div>
        </div>
      </section>

      <section id="design-system">
        <div className="wrap reveal">
          <div className="section-label">09 · Design system</div>
          <h2>A minimal, clinical palette.</h2>
          <div className="swatch-row">
            <div className="swatch"><div className="chip" style={{ background: "#111214" }}></div><span className="lbl">Ink Black</span></div>
            <div className="swatch"><div className="chip" style={{ background: "#F4F2ED" }}></div><span className="lbl">Clinical White</span></div>
            <div className="swatch"><div className="chip" style={{ background: "#C9A98C" }}></div><span className="lbl">Skin Tone</span></div>
            <div className="swatch"><div className="chip" style={{ background: "#9AA097" }}></div><span className="lbl">Sage</span></div>
          </div>
        </div>
      </section>

      <section id="responsive" style={{ background: "var(--paper-raise)" }}>
        <div className="wrap reveal">
          <div className="section-label">10 · Responsive experience</div>
          <h2>Recomposed, not shrunk.</h2>
          <div className="spec-panel">
            <div className="row"><span>Desktop — 1440px</span><span>Split product / ingredient layout</span></div>
            <div className="row"><span>Tablet — 1024px</span><span>Stacked layout, sticky CTA</span></div>
            <div className="row"><span>Mobile — 390px</span><span>Single column, sticky subscribe CTA</span></div>
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
            <li style={{ marginBottom: 10 }}>Developed a catalogue campaign framework.</li>
            <li style={{ marginBottom: 10 }}>Designed a Pixel + CAPI tracking model.</li>
          </ul>
        </div>
      </section>

      <section id="outcome" style={{ background: "var(--paper-raise)" }}>
        <div className="wrap reveal">
          <div className="section-label">12 · Project outcome</div>
          <h2>A working demonstration of an education-led DTC system.</h2>
          <p className="section-intro">
            Created a conversion-focused product journey and a Meta commerce architecture designed to hold up as
            an implementation reference for DTC beauty and personal-care brands.
          </p>
          <div className="disclaimer">
            13 · Disclaimer — Noiré Skin is an original, fictional brand created as an independent portfolio
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
