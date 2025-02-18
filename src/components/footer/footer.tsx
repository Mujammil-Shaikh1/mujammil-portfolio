"use client";
// footerConfig.ts

import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconMail,
} from "@tabler/icons-react";
import { BackgroundBeams } from "../ui/background-beams";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Experience", href: "/experience" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Technologies", href: "/technologies" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    href: "https://wa.me/your_number",
    icon: IconBrandWhatsapp,
  },
  {
    href: "mailto:your_email@example.com",
    icon: IconMail,
  },
  {
    href: "https://www.linkedin.com/in/your_profile",
    icon: IconBrandLinkedin,
  },
  {
    href: "https://github.com/your_github",
    icon: IconBrandGithub,
  },
];

export default function Footer() {
  return (
    <div className="h-96 w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4 flex flex-col gap-6">
        <h1 className="relative z-10 text-lg md:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
          Mujammil Shaikh
        </h1>

        {/* Navigation Links */}
        <ul className="flex gap-10 z-10 justify-center items-center text-md">
          {navLinks.map(({ name, href }) => (
            <li key={name}>
              <a
                href={href}
                className="text-neutral-400 hover:text-neutral-200 hover:underline cursor-pointer focus:outline-none"
              >
                {name}
              </a>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="flex justify-center z-10 items-center">
          <div className="flex gap-6">
            {socialLinks.map(({ href, icon: Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="w-12 h-12 p-[10px] bg-zinc-900 text-neutral-400 hover:bg-neutral-400 hover:text-zinc-900 hover:rounded-lg rounded-md" />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mb-16 z-10 text-neutral-300 flex justify-center">
          <small>© Mujammil Shaikh. All Rights Reserved</small>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}
