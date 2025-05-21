import React from "react";

const Footer: React.FC = () => (
  <footer className="footer" role="contentinfo">
    <span className="footer__trademark">
      © {new Date().getFullYear()} Made by Yonatan Koritny 
    </span>
  </footer>
);

export default Footer;
