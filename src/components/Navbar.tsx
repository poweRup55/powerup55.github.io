import React, { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Use useNavigate hook
import "./styles/Shared.css"; // Assuming shared styles are here
import { NavLink, SocialLink } from "./navLinks"; // Import types

// Define the props interface for the Navbar component
interface NavbarProps {
  navLinks: NavLink[];
  socialLinks: SocialLink[];
  showHome?: boolean; // Optional prop
}

// Define the type for the parameters of renderLinkItems
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
  const mobileMenuRef = useRef<HTMLDivElement>(null); // Type the ref
  const location = useLocation();
  const navigate = useNavigate(); // Use the hook for navigation
  const isHomePage = location.pathname === "/";

  const handleNavigate = (href: string) => {
    if (href.startsWith("/")) {
      navigate(href);
    } else {
      // Handle external links if necessary, though current usage seems internal
      window.location.href = href; // Or open in new tab: window.open(href, '_blank', 'noopener,noreferrer');
    }
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLAnchorElement | HTMLButtonElement>,
    href: string,
    closeMenu?: boolean
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleNavigate(href);
      if (closeMenu) setIsMobileMenuOpen(false);
    }
  };

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleCloseMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Close menu on outside click or Escape
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) // Type assertion
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
  }: RenderLinkItemsParams): React.ReactNode[] => // Specify return type
    links.map((link) => {
      const className = `${
        isSocial
          ? "social-link" // Simplified class names, adjust as needed
          : "nav-link"
      } ${linkClassName}`.trim();

      const commonProps = {
        className,
        href: link.href,
        tabIndex: 0,
        "aria-label": link.label,
        role: isMobile ? "menuitem" : undefined,
      };

      if (isSocial) {
        // Type assertion for social links
        const socialLink = link as SocialLink;
        return (
          <a
            key={socialLink.label}
            {...commonProps}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMobileMenuOnClick ? handleCloseMobileMenu : undefined}
            onKeyDown={(e: React.KeyboardEvent<HTMLAnchorElement>) =>
              handleKeyDown(e, socialLink.href, closeMobileMenuOnClick)
            }
          >
            {<socialLink.icon></socialLink.icon>}
          </a>
        );
      }

      // Type assertion for nav links
      const navLink = link as NavLink;
      return (
        <a
          key={navLink.label}
          {...commonProps}
          onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
            if (navLink.href.startsWith("/")) {
              e.preventDefault();
              handleNavigate(navLink.href);
            }
            if (closeMobileMenuOnClick) handleCloseMobileMenu();
          }}
          onKeyDown={(e: React.KeyboardEvent<HTMLAnchorElement>) =>
            handleKeyDown(e, navLink.href, closeMobileMenuOnClick)
          }
        >
          {navLink.label}
        </a>
      );
    });

  return (
    <nav
      className={`navbar ${isHomePage ? "navbar--column-mobile" : ""}`} // Use simpler base class
      aria-label="Main Navigation"
    >
      {/* Hamburger button for mobile - only show if not on homepage */}
      {!isHomePage && (
        <button
          className={"navbar-hamburger"}
          aria-label={
            isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-controls="mobile-menu"
          aria-expanded={isMobileMenuOpen}
          tabIndex={0}
          onClick={handleToggleMobileMenu} // Simplified toggle logic
          onKeyDown={(e: React.KeyboardEvent<HTMLButtonElement>) => {
            // Type event
            if (e.key === "Enter" || e.key === " ") {
              handleToggleMobileMenu();
            }
          }}
          type="button"
        >
          {/* Use spans for bars, manage open state with CSS */}
          <span className="navbar-hamburger-bar" />
          <span className="navbar-hamburger-bar" />
          <span className="navbar-hamburger-bar" />
        </button>
      )}

      {/* Desktop or homepage nav links */}
      {/* Conditionally render based on screen size or always show for simplicity? Assuming desktop shown */}
      <div
        className={`navbar-links ${isHomePage ? "" : "navbar-links--desktop"}`}
      >
        {showHome && (
          <a
            className="nav-link home-link-bold" // Use consistent class
            href="/"
            tabIndex={0}
            aria-label="Home"
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
              // Type event
              e.preventDefault();
              handleNavigate("/");
            }}
            onKeyDown={(e: React.KeyboardEvent<HTMLAnchorElement>) =>
              handleKeyDown(e, "/")
            } // Type event
          >
            Home
          </a>
        )}
        {renderLinkItems({ links: navLinks })}
        {renderLinkItems({ links: socialLinks, isSocial: true })}
      </div>

      {/* Mobile dropdown menu - only show if not on homepage and menu is open */}
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
              className="nav-link home-link-bold" // Use consistent class
              href="/"
              tabIndex={0}
              aria-label="Home"
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                // Type event
                e.preventDefault();
                handleNavigate("/");
                handleCloseMobileMenu();
              }}
              onKeyDown={(e: React.KeyboardEvent<HTMLAnchorElement>) =>
                handleKeyDown(e, "/", true)
              } // Type event
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

export default Navbar; // Export the component directly
