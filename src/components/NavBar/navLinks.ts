import React from "react";
import { IconType } from "react-icons";
import { FaFacebook, FaInstagram, FaVimeo } from "react-icons/fa";

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
  { label: "Social Media", href: "/social-media" },
  { label: "Films", href: "/films" },
  { label: "Bezalel Art Projects", href: "/art-projects" },
  { label: "About", href: "/about" },
];

export const socialLinks: SocialLink[] = [
  { icon: FaInstagram, href: "https://www.instagram.com/yonatan_koritny/", label: "Instagram" },
  { icon: FaVimeo, href: "https://vimeo.com/yonatankoritny", label: "Vimeo" },
];
