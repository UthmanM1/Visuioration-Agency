import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="f-left">
          VISUIORATION — Performance, ecommerce and growth systems built around measurable outcomes.
          <br />
          contact@visuioration.com
        </div>
        <div className="f-links">
          <Link href="/services">Services</Link>
          <Link href="/case-studies">Case Studies</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
