import React from "react";
import { IconType } from "react-icons";
import { FaFacebook, FaInstagram, FaLinkedin, FaVimeo } from "react-icons/fa";

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  icon: IconType;
  href: string;
  label: string;
}

export const navLinks: NavLink[] = [
  { label: "Video Editor", href: "/film-editor" },
  { label: "Developer", href: "/developer" },
  { label: "Artist", href: "/artist" },
  { label: "About", href: "/about" },
];

export const socialLinks: SocialLink[] = [
  { icon: FaInstagram, href: "https://www.instagram.com/yonatan_koritny/", label: "Instagram" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/yonatan-koritny/", label: "Linkedin" },
  { icon: FaVimeo, href: "https://vimeo.com/yonatankoritny", label: "Vimeo" },
];
