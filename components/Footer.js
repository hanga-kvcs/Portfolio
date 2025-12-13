"use client";

import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-container">

      {/* LEFT — EMAIL + LINKEDIN */}
      <div className="footer-left">
        <a 
          href="mailto:k.hanga03@gmail.com"
          className="about-link header-link">
          Email
        </a>

        <a
          href="https://www.linkedin.com/in/hanga-kov%C3%A1cs-463925199/"
          target="_blank"
          rel="noopener noreferrer"
          className="about-link header-link"
        >
          LinkedIn
        </a>
      </div>

      {/* MIDDLE — NAVIGATION */}
      <nav className="footer-middle">
        <Link href="/" className="footer-link header-link">home</Link>
        <p>/</p>
        <Link href="/#projects" className="footer-link header-link">projects</Link>
        <p>/</p>
        <Link href="/gallery/" className="footer-link header-link">gallery</Link>
        <p>/</p>
        <Link href="/about/" className="footer-link header-link">about</Link>
      </nav>

      {/* RIGHT — COPYRIGHT */}
      <p className="footer-right">
        © {year} hanga kovács — All rights reserved.
      </p>
    </footer>
  );
}
