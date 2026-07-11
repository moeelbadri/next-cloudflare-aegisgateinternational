"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname(); // 🧭 gives us the current URL path
  const [isMenuOpen, setMenuOpen] = useState(false);

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);
  return (
    <>
      <header>
        {/* Top Header */}
        <div className="top-header letterhead-header">
          <div className="left-section">
              <Link href="/" className="logo-link">
              <img src="/logo-bg.png" alt="Aegis Gate International" className="logo" />
              </Link>
          </div>
          {/* Replace "Logo" with an image */}
          {/* Center: Logo */}
          <div className="center-section">

          </div>
          <div className="center-section">

          </div>
          <div className="center-section">

          </div>
          {/* Right: Navigation links and Menu button */}
          <div className="right-section">
            <nav className="top-nav-links">
              <Link 
                href="/" 
                className={`top-nav-link ${pathname === "/" ? "active" : ""}`}
                suppressHydrationWarning
              >
                Home
              </Link>
              <Link 
                href="/about-us" 
                className={`top-nav-link ${pathname === "/about-us" ? "active" : ""}`}
                suppressHydrationWarning
              >
                About Us
              </Link>
              <Link 
                href="/mission" 
                className={`top-nav-link ${pathname === "/mission" ? "active" : ""}`}
                suppressHydrationWarning
              >
                Mission
              </Link>
              <Link 
                href="/vision" 
                className={`top-nav-link ${pathname === "/vision" ? "active" : ""}`}
                suppressHydrationWarning
              >
                Vision
              </Link>
              <Link 
                href="/contact-us" 
                className={`top-nav-link ${pathname === "/contact-us" ? "active" : ""}`}
                suppressHydrationWarning
              >
                Contact Us
              </Link>
            </nav>
            <button className="menu-btn" onClick={openMenu}>
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>

        {/* Navigation Bar */}
        {/* <nav
          ref={navbarRef}
          className={`navbar ${
            isSticky ? "sticky-navbar desktop-navbar" : "navbar desktop-navbar"
          }`}
        >
          <ul>
            <li className={pathname === "/" ? "active-link" : ""}>
              <Link href="/">Home</Link>
            </li>
            <li className={pathname === "/about-us" ? "active-link" : ""}>
              <Link href="/about-us">About Us</Link>
            </li>
            {isSticky && (
              <li className="navbar-logo">
                <Link href="/">
                  <img src="/qt=q_95.webp" alt="Logo" className="navbar-logo-img" />
                </Link>
              </li>
            )}
            <li className={pathname === "/mission" ? "active-link" : ""}>
              <Link href="/mission">Mission</Link>
            </li>
            <li className={pathname === "/vision" ? "active-link" : ""}>
              <Link href="/vision">Vision</Link>
            </li> */}
            {/* <li className="dropdown">
            <Link href="/our-work">Our work</Link>
            <ul className="dropdown-menu">
              <li>
                <Link href="/work1">Work 1</Link>
              </li>
              <li>
                <Link href="/work2">Work 2</Link>
              </li>
            </ul>
          </li> */}
            {/* <li className={pathname === "/donate-now" ? "active-link" : ""}>
              <Link href="/donate-now">Donate Now</Link>
            </li> */}
            {/* <li className={pathname === "/contact-us" ? "active-link" : ""}>
              <Link href="/contact-us">Contact Us</Link>
            </li> */}
          {/* </ul>
        </nav> */}
      </header>
      {/* Overlay Menu (only shown when isMenuOpen is true) */}
      {isMenuOpen && (
        <div className="menu-overlay">
          <div className="menu-content">
            {/* Close button in the top right corner */}
            <button className="close-btn" onClick={closeMenu}>
              <i className="fas fa-times"></i>
            </button>

            {/* Navigation Links */}
            <ul className="menu-links">
              <li>
                <Link className="links" href="/" onClick={closeMenu} suppressHydrationWarning>
                  Home
                </Link>
              </li>
              <li>
                <Link className="links" href="/about-us" onClick={closeMenu} suppressHydrationWarning>
                  About us
                </Link>
              </li>
              <li>
                <Link className="links" href="/mission" onClick={closeMenu} suppressHydrationWarning>
                  Mission
                </Link>
              </li>
              <li>
                <Link className="links" href="/vision" onClick={closeMenu} suppressHydrationWarning>
                  Vision
                </Link>
              </li>
              <li>
                <Link className="links" href="/contact-us" onClick={closeMenu} suppressHydrationWarning>
                  Contact Us
                </Link>
              </li> 
              {/* <li>
                <Link href="/donate-now" onClick={closeMenu} className="donate-link">
                  Donate Now
                </Link>
              </li> */}
            </ul>

            {/* Optional social icons near the bottom */}
            {/* <div className="social-icons">
              <Link href="https://facebook.com" target="_blank">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link href="https://instagram.com" target="_blank">
                <i className="fab fa-instagram"></i>
              </Link>
            </div> */}
          </div>
        </div>
      )}
    </>
  );
}
