import React from "react";
import AnimatedElement from "../Animation/AnimatedElement";
import "../ComponentsStyles.css";

const LandingPageTemplate = ({
  title,
  subtitle,
  description,
  navLinks,
  socialLinks,
  buttons,
  projectsLink,
  pageClass = "",
  titleClass = "",
  subtitleClass = "",
  descriptionClass = "",
  navClass = "",
  navLinkClass = "",
  projectsLinkClass = "",
  buttonsClass = "",
  socialBarClass = "",
  socialLinkClass = "",
}) => {
  const navigate =
    typeof window !== "undefined" && window.location
      ? (href) => {
          window.location.href = href;
        }
      : () => {};

  return (
    <div className={`home landing-dark ${pageClass} page-root-custom`}>
      <AnimatedElement>
        <h1 className={`${titleClass} page-title-custom`}>{title}</h1>
      </AnimatedElement>
      <AnimatedElement delay={200}>
        <h2 className={`${subtitleClass} page-subtitle-custom`}>{subtitle}</h2>
      </AnimatedElement>
      <AnimatedElement delay={300}>
        <nav className={`${navClass} page-nav-custom`}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              className={`${navLinkClass} page-nav-link-custom`}
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
        </nav>
      </AnimatedElement>
      <AnimatedElement delay={400}>
        <p className={`${descriptionClass} page-description-custom`}>
          {description}
        </p>
      </AnimatedElement>
      {projectsLink && (
        <AnimatedElement delay={600}>
          <a
            className={`${projectsLinkClass} page-projects-link-custom`}
            href={projectsLink.href}
            onMouseOver={(e) => (
              (e.currentTarget.style.background = "var(--accent)"),
              (e.currentTarget.style.color = "#181c24")
            )}
            onMouseOut={(e) => (
              (e.currentTarget.style.background = "var(--primary)"),
              (e.currentTarget.style.color = "#181c24")
            )}
          >
            {projectsLink.label}
          </a>
        </AnimatedElement>
      )}
      {buttons && (
        <AnimatedElement delay={800}>
          <div className={`${buttonsClass} page-buttons-custom`}>
            {buttons.map((btn) => (
              <button
                key={btn.label}
                className={btn.className}
                onClick={btn.onClick}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </AnimatedElement>
      )}
      {/* Social Bar */}
      <AnimatedElement delay={1000}>
        <div className={`${socialBarClass} page-social-bar-custom`}>
          {socialLinks.map((link) => (
            <a
              key={link.label}
              className={`${socialLinkClass} page-social-link-custom`}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              onMouseOver={(e) =>
                (e.currentTarget.style.color = "var(--primary)")
              }
              onMouseOut={(e) => (e.currentTarget.style.color = "var(--text)")}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </AnimatedElement>
    </div>
  );
};

export default LandingPageTemplate;
