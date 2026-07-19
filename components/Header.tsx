"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header({ active }: { active: "home" | "services" | "case-studies" | "contact" }) {
  const [open, setOpen] = useState(false);

  const linkClass = (key: string) => (active === key ? "active" : "");

  return (
    <header>
      <div className="wrap nav">
        <Link href="/" className="logo">
          <span className="mark"></span>VISUIORATION
        </Link>
        <button className="nav-toggle" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          MENU
        </button>
        <nav className={`links ${open ? "open" : ""}`}>
          <Link href="/" className={linkClass("home")}>Home</Link>
          <Link href="/services" className={linkClass("services")}>Services</Link>
          <Link href="/case-studies" className={linkClass("case-studies")}>Case Studies</Link>
          <Link href="/contact" className={linkClass("contact")}>Contact</Link>
        </nav>
        <Link href="/contact" className="nav-cta">Request a project</Link>
      </div>
    </header>
  );
}
