"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const links = [
  {
    icon: Github,
    href: "https://github.com/lawrence-valerio",
    label: "GitHub",
  },
  {
    icon: Mail,
    href: "mailto:valerio.lawrence@gmail.com",
    label: "Email",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/lawrence-valerio/",
    label: "LinkedIn",
  },
];

export const ContactSection = () => {
  return (
    <div className="relative z-0 pt-screen">
      <div className="mx-auto max-w-screen-sm py-3 px-6 bg-white darkmode-bg">
        <motion.div
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <hr className="border-t border-gray-400 my-10" />
          <div className="my-10 flex flex-row gap-4 justify-center">
            {links.map((link, index) => {
              const Icon = link.icon;
              return (
                <Link
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.8 }}
                  >
                    <Icon
                      size={40}
                      className="hover:opacity-70 transition-opacity cursor-pointer"
                    />
                  </motion.div>
                </Link>
              );
            })}
          </div>
          <div className="flex justify-center">
            <span className="text-xs text-gray-400">
              © 2025 | Lawrence Valerio
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
