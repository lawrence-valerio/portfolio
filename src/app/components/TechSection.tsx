import Image from "next/image";
import cSharpIcon from "../../../public/icons/csharp.svg";
import nextDotJSIcon from "../../../public/icons/nextdotjs.svg";
import tailWindIcon from "../../../public/icons/tailwindcss.svg";

const icons = [
  { name: "Next.js", icon: nextDotJSIcon },
  { name: "Tailwind", icon: tailWindIcon },
];

export const TechSection = () => {
  return (
    <div className="relative z-0 pt-screen">
      <div className="mx-auto max-w-screen-sm px-6 darkmode-bg">
        <hr className="border-t border-gray-400 my-10" />
        <h2 className="text-xl font-bold mb-4">Technologies</h2>
        <div className="flex flex-wrap gap-6 justify-center">
          {icons.map((icon) => (
            <div key={icon.name} className="flex flex-col items-center">
              <Image src={icon.icon} alt={icon.name} />
              <span>{icon.name}</span>
            </div>
          ))}
        </div>
        <div className="h-[100vh]" />
      </div>
    </div>
  );
};
