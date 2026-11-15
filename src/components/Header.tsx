"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/lib/site";
import Logo from "./Logo";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isCurrent = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href.replace(/\/$/, "")));

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link href="/" className="brand" aria-label="Kido Hoops Academy — home">
          <Logo width={52} />
          <span className="brand__word">
            Kido Hoops
            <small>Academy · LA</small>
          </span>
        </Link>

        <nav className="nav" aria-label="Main">
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} aria-current={isCurrent(item.href) ? "page" : undefined}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link href="/register/" className="btn header-cta">
          Book Training
        </Link>

        <button
          type="button"
          className="menu-btn"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="menu-btn__bars" aria-hidden="true">
            <span />
          </span>
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div id="mobile-nav" className="mobile-nav">
          <nav aria-label="Mobile">
            <ul>
              <li>
                <Link className="mobile-nav__link" onClick={() => setOpen(false)} href="/" aria-current={pathname === "/" ? "page" : undefined}>
                  Home <span aria-hidden="true">→</span>
                </Link>
              </li>
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    className="mobile-nav__link"
                    onClick={() => setOpen(false)}
                    href={item.href}
                    aria-current={isCurrent(item.href) ? "page" : undefined}
                  >
                    {item.label} <span aria-hidden="true">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Link href="/register/" className="btn" onClick={() => setOpen(false)}>
            Book Training <span className="arrow" aria-hidden="true">→</span>
          </Link>
        </div>
      )}
    </header>
  );
}
