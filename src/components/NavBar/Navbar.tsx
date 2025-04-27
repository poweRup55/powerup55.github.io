import React, { useState, useRef, useEffect } from "react";
import "../styles/Shared.css";
import "./Navbar.css";
import { NavLink, SocialLink } from "./navLinks";

interface NavbarProps {
  navLinks: NavLink[];
  socialLinks: SocialLink[];
  showHome?: boolean;
}

interface RenderLinkItemsParams {
  links: (NavLink | SocialLink)[];
  isSocial?: boolean;
  linkClassName?: string;
  closeMobileMenuOnClick?: boolean;
  isMobile?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({
  navLinks,
  socialLinks,
  showHome = false,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const isHomePage =
    window.location.pathname === "/" ||
    window.location.pathname === "/index" ||
    window.location.pathname.endsWith("index.html");

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLAnchorElement | HTMLButtonElement>,
    closeMenu?: boolean
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      if (closeMenu) setIsMobileMenuOpen(false);
    }
  };

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleCloseMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMobileMenuOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isMobileMenuOpen]);

  const renderLinkItems = ({
    links,
    isSocial = false,
    linkClassName = "",
    closeMobileMenuOnClick = false,
    isMobile = false,
  }: RenderLinkItemsParams): React.ReactNode[] =>
    links.map((link) => {
      const className = `${
        isSocial ? "social-link" : "nav-link"
      } ${linkClassName}`.trim();

      const commonProps = {
        className,
        href: link.href,
        tabIndex: 0,
        "aria-label": link.label,
        role: isMobile ? "menuitem" : undefined,
      };

      if (isSocial) {
        const socialLink = link as SocialLink;
        return (
          <a
            key={socialLink.label}
            {...commonProps}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMobileMenuOnClick ? handleCloseMobileMenu : undefined}
            onKeyDown={(e: React.KeyboardEvent<HTMLAnchorElement>) =>
              handleKeyDown(e, closeMobileMenuOnClick)
            }
          >
            {<socialLink.icon></socialLink.icon>}
          </a>
        );
      }

      const navLink = link as NavLink;
      return (
        <a
          key={navLink.label}
          {...commonProps}
          onClick={closeMobileMenuOnClick ? handleCloseMobileMenu : undefined}
          onKeyDown={(e: React.KeyboardEvent<HTMLAnchorElement>) =>
            handleKeyDown(e, closeMobileMenuOnClick)
          }
        >
          {navLink.label}
        </a>
      );
    });

  return (
    <nav
      className={`navbar ${isHomePage ? "navbar--column-mobile" : ""}`}
      aria-label="Main Navigation"
    >
      {!isHomePage && (
        <button
          className="navbar-hamburger"
          aria-label={
            isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-controls="mobile-menu"
          aria-expanded={isMobileMenuOpen}
          tabIndex={0}
          onClick={handleToggleMobileMenu}
          onKeyDown={(e: React.KeyboardEvent<HTMLButtonElement>) => {
            if (e.key === "Enter" || e.key === " ") {
              handleToggleMobileMenu();
            }
          }}
          type="button"
        >
          <span className="navbar-hamburger-bar" />
          <span className="navbar-hamburger-bar" />
          <span className="navbar-hamburger-bar" />
        </button>
      )}

      <div
        className={`navbar-links ${isHomePage ? "" : "navbar-links--desktop"}`}
      >
        {showHome && (
          <a
            className="nav-link home-link-bold"
            href="/"
            tabIndex={0}
            aria-label="Home"
          >
            Home
          </a>
        )}
        {renderLinkItems({ links: navLinks })}
        {renderLinkItems({ links: socialLinks, isSocial: true })}
      </div>

      {!isHomePage && isMobileMenuOpen && (
        <div
          className="navbar-mobile-menu"
          id="mobile-menu"
          ref={mobileMenuRef}
          role="menu"
          aria-label="Mobile Navigation Menu"
        >
          {showHome && (
            <a
              className="nav-link home-link-bold"
              href="/"
              tabIndex={0}
              aria-label="Home"
              onClick={handleCloseMobileMenu}
              onKeyDown={(e: React.KeyboardEvent<HTMLAnchorElement>) =>
                handleKeyDown(e, true)
              }
              role="menuitem"
            >
              Home
            </a>
          )}
          {renderLinkItems({
            links: navLinks,
            closeMobileMenuOnClick: true,
            isMobile: true,
          })}
          {renderLinkItems({
            links: socialLinks,
            isSocial: true,
            closeMobileMenuOnClick: true,
            isMobile: true,
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
