"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "FridgeMeals",
    year: "2025",
    description:
      "A recipe suggestion site that uses the Spoonacular API to find recipes based on what's in your fridge",
    siteLink: "https://fridge-meals.vercel.app/overview/home",
    githubLink: "https://github.com/lawrence-valerio/fridge-meals",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    name: "HotelApp",
    year: "2022",
    description:
      "A web and desktop application for managing hotel operations, including guest management, room bookings, check-ins, and real-time room availability",
    siteLink: "",
    githubLink: "https://github.com/lawrence-valerio/HotelApp",
    techStack: [".NET", "C#", "SQL", "ASP.NET Core"],
  },
];

export const ProjectSection = () => {
  return (
    <div className="relative z-0 pt-screen">
      <div className="mx-auto max-w-screen-sm py-3 px-6 bg-white darkmode-bg">
        <motion.div
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <hr className="border-t border-gray-400 my-10" />
          <h2 className="text-xl font-bold">Projects</h2>
          <div className="mt-7">
            {projects.map((project) => (
              <div
                key={project.name}
                className="flex flex-col md:flex-row mt-6"
              >
                <time className="min-w-29 text-sm" dateTime={`${project.year}`}>
                  {project.year}
                </time>
                <div className="flex flex-wrap">
                  {project.siteLink ? (
                    <a
                      href={project.siteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-5 hover:decoration-gray-400"
                    >
                      {project.name}
                    </a>
                  ) : (
                    <span>{project.name}</span>
                  )}
                  {project.githubLink && (
                    <>
                      <span className="ml-2">
                        -
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-2 underline underline-offset-5 hover:decoration-gray-400"
                        >
                          GitHub
                        </a>
                      </span>
                      <ArrowUpRight size={15} className="ml-1" />
                    </>
                  )}
                  <p className="mt-2 text-sm text-gray-400">
                    {project.description}
                  </p>
                  <ul className="flex flex-wrap text-xs mt-2 gap-2">
                    {project.techStack.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full bg-white/5 px-2 py-1 hover:bg-white/3 transition-colors cursor-default"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
