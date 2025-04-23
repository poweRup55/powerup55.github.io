import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import "../ComponentsStyles.css";

const navLinks = [
  { label: "Film Editing", href: "/film-editing" },
  { label: "Computer Science", href: "/computer-science" },
  { label: "Project Demo", href: "/project-demo" },
  { label: "About", href: "/about" },
];

const socialLinks = [
  { icon: <FaFacebook />, href: "https://facebook.com/", label: "Facebook" },
  { icon: <FaInstagram />, href: "https://instagram.com/", label: "Instagram" },
];

const HomeNav = () => {
  const navigate =
    typeof window !== "undefined" && window.location
      ? (href) => {
          window.location.href = href;
        }
      : () => {};

  return (
    <nav
      className="home-nav page-nav-custom"
      style={{
        marginBottom: "2rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "2.5rem",
        paddingTop: "2rem",
      }}
    >
      <a
        className="home-nav-link page-nav-link-custom"
        href="/"
        onClick={(e) => {
          e.preventDefault();
          navigate("/");
        }}
        style={{ fontWeight: "bold", fontSize: "1.2rem", marginRight: "2rem" }}
      >
        Home
      </a>
      {navLinks.map((link) => (
        <a
          key={link.label}
          className="home-nav-link page-nav-link-custom"
          href={link.href}
          onClick={(e) => {
            if (link.href.startsWith("/")) {
              e.preventDefault();
              navigate(link.href);
            }
          }}
          onMouseOver={(e) => (
            (e.currentTarget.style.background = "var(--primary)"),
            (e.currentTarget.style.color = "#181c24")
          )}
          onMouseOut={(e) => (
            (e.currentTarget.style.background = "transparent"),
            (e.currentTarget.style.color = "var(--text)")
          )}
        >
          {link.label}
        </a>
      ))}
      {socialLinks.map((link) => (
        <a
          key={link.label}
          className="home-social-link page-social-link-custom"
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          style={{ marginLeft: "1.5rem", fontSize: "1.5rem" }}
          onMouseOver={(e) => (e.currentTarget.style.color = "var(--primary)")}
          onMouseOut={(e) => (e.currentTarget.style.color = "var(--text)")}
        >
          {link.icon}
        </a>
      ))}
    </nav>
  );
};

export default HomeNav;
