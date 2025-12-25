"use client";

import { useState } from "react";
import { Home, Github, Twitter, Instagram, Linkedin } from "lucide-react";

/**
 * Custom TikTok SVG icon
 * (Lucide does not include TikTok)
 */
function TikTokIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12.8 2h2.1c.3 2.1 1.6 3.9 3.6 4.6v2.2c-1.7 0-3.3-.5-4.6-1.4v7.1c0 3-2.4 5.5-5.5 5.5S3 17.6 3 14.6s2.4-5.5 5.5-5.5c.4 0 .8 0 1.2.1v2.3c-.4-.1-.8-.2-1.2-.2-1.7 0-3 1.4-3 3s1.4 3 3 3 3-1.4 3-3V2z" />
    </svg>
  );
}

export default function Navbar() {
  const [active, setActive] = useState("home");

  /**
   * Navbar links configuration
   */
  const links = [
    { id: "home", icon: <Home size={18} />, href: "#home" },
    { id: "twitter", icon: <Twitter size={18} />, href: "https://x.com/yemith_dev" },
    { id: "github", icon: <Github size={18} />, href: "https://github.com/yemithpml" },
    { id: "instagram", icon: <Instagram size={18} />, href: "https://instagram.com/yemith.dev" },
    { id: "tiktok", icon: <TikTokIcon />, href: "https://tiktok.com/@yemith_dev" },
    { id: "linkedin", icon: <Linkedin size={18} />, href: "https://linkedin.com/in/opeyemi-odusanya-2a7a38262" },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center justify-between bg-white/90 backdrop-blur-md shadow-lg rounded-full px-6 py-4 transition-all duration-300 w-[300px] sm:w-[360px] md:w-[440px] lg:w-[520px]">
        {links.map((link) => (
          <a
            key={link.id}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : "_self"}
            rel="noopener noreferrer"
            onClick={() => setActive(link.id)}
            className={`flex items-center justify-center h-10 w-10 rounded-full transition-all duration-300 ${
              active === link.id
                ? "bg-black text-white scale-110"
                : "text-gray-600 hover:bg-gray-100 hover:scale-105"
            }`}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </nav>
  );
}
