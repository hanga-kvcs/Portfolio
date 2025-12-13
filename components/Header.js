"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header
      className="header-transition flex justify-between items-center py-6 px-8 font-text"
    >
      {/* LEFT */}
      <Link href="/" className="name header-link">
        hanga kovács
      </Link>

      {/* MIDDLE */}
      <nav className="flex items-center gap-8 text-sm">
        <Link href="/#projects" className="index header-link">
          projects
        </Link>

        <p>/</p>

        <Link
          href="/gallery"
          className={`index header-link ${
            pathname === "/gallery/" ? "active" : ""
          }`}
        >
          gallery
        </Link>
      </nav>

      {/* RIGHT */}
      <Link
        href="/about"
        className={`about header-link ${
          pathname === "/about/" ? "active" : ""
        }`}
      >
        [about]
      </Link>
    </header>
  );
}
