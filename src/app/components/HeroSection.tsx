"use client";

import { MapPin, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import picture from "../../../public/picture.png";
import { ThemeToggle } from "./ThemeToggle";

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

export const HeroSection = () => {
  return (
    <div className="sticky top-12 mx-auto h-full w-full max-w-7xl sm:top-16">
      <div className="relative flex h-[calc(100vh-5rem)] sm:h-[calc(100dvh-5rem)] w-full flex-col justify-center py-8 sm:min-h-[calc(100dvh-5rem)]">
        <div className="mx-auto max-w-screen-sm px-6">
          <ThemeToggle />
          <motion.div
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="flex flex-col-reverse md:flex-row md:items-end">
              <h1 className="text-4xl font-black mb-1 mt-5">{`Hi, I'm Lawrence!`}</h1>
              <Image
                src={picture}
                alt="Profile Picture"
                width={150}
                height={150}
                className="block mx-auto rounded-full bg-gray-300 darkmode-bg-white"
              />
            </div>
            <div className="flex items-center space-x-1 mb-7 mt-2">
              <MapPin size={16} />
              <span className="text-xs">Manitoba</span>
            </div>
            <div className="mb-9">
              <p>
                {`
              I'm a Software & Web Developer. I love designing cool stuff and
              bringing it to life with code! Whether it's a sleek website or a
              fun app, I enjoy turning ideas into things people can actually use
              and enjoy.`}
              </p>
            </div>
            <div className="flex items-center gap-4">
              {links.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    >
                      <Icon
                        size={30}
                        className="hover:opacity-70 transition-opacity cursor-pointer"
                      />
                    </motion.div>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
