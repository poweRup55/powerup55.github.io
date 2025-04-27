import React from "react";
import { IconType } from "react-icons";
import { FaFacebook, FaInstagram } from "react-icons/fa";

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
  { icon: FaFacebook, href: "https://facebook.com/", label: "Facebook" },
  { icon: FaInstagram, href: "https://instagram.com/", label: "Instagram" },
];
