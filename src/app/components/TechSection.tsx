"use client";

import Image from "next/image";
import cSharpIcon from "../../../public/icons/csharp.svg";
import nextDotJSIcon from "../../../public/icons/nextdotjs.svg";
import tailWindIcon from "../../../public/icons/tailwindcss.svg";
import reactIcon from "../../../public/icons/react.svg";
import pythonIcon from "../../../public/icons/python.svg";
import threejsIcon from "../../../public/icons/threedotjs.svg";
import typescriptIcon from "../../../public/icons/typescript.svg";
import dotnetIcon from "../../../public/icons/dotnet.svg";
import { motion } from "framer-motion";

const icons = [
  { name: "Next.js", icon: nextDotJSIcon },
  { name: "Tailwind CSS", icon: tailWindIcon },
  { name: "React", icon: reactIcon },
  { name: "Typescript", icon: typescriptIcon },
  { name: "Three.js", icon: threejsIcon },
  { name: "Python", icon: pythonIcon },
  { name: "C#", icon: cSharpIcon },
  { name: ".NET", icon: dotnetIcon },
];

export const TechSection = () => {
  return (
    <div className="relative z-0 pt-screen">
      <div className="mx-auto max-w-screen-sm px-6 bg-white darkmode-bg">
        <div className="pointer-events-none absolute -top-48 h-48 left-0 w-full backdrop-blur-[2px] mask-to-t" />
        <motion.div
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <hr className="border-t border-gray-400 my-10" />
          <h2 className="text-xl font-bold">Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-7 pb-2">
            {icons.map((icon) => (
              <motion.div key={icon.name} whileHover={{ scale: 1.1 }}>
                <div className="flex flex-col items-center p-4 rounded-lg bg-gray-300 darkmode-bg-white ">
                  <Image
                    src={icon.icon}
                    alt={icon.name}
                    width={50}
                    height={50}
                    className="invert-0 darkmode-invert"
                  />
                  <span className="text-sm mt-4">{icon.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
