import React from "react";
import { IconTree, IconType } from "react-icons";
// Remove IconType import if not directly used for typing variables
// import { IconType } from "react-icons";
import { FaFacebook, FaInstagram } from "react-icons/fa";

// Define the type for a navigation link
export interface NavLink {
  label: string;
  href: string;
}

// Define the type for a social media link
export interface SocialLink {
  icon: IconType; // Use React.ReactElement for JSX elements
  href: string;
  label: string;
}

// Apply the types to the exported constants
export const navLinks: NavLink[] = [
  { label: "Video Editor", href: "/film-editor" },
  { label: "Developer", href: "/developer" },
  { label: "Artist", href: "/artist" },
  { label: "About", href: "/about" },
];

export const socialLinks: SocialLink[] = [
  // Ensure JSX elements are correctly formed
  { icon: FaFacebook, href: "https://facebook.com/", label: "Facebook" },
  { icon: FaInstagram, href: "https://instagram.com/", label: "Instagram" },
];
