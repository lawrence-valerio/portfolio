import Image from "next/image";
import cSharpIcon from "../../../public/icons/csharp.svg";
import nextDotJSIcon from "../../../public/icons/nextdotjs.svg";
import tailWindIcon from "../../../public/icons/tailwindcss.svg";
import reactIcon from "../../../public/icons/react.svg";
import pythonIcon from "../../../public/icons/python.svg";
import threejsIcon from "../../../public/icons/threedotjs.svg";
import typescriptIcon from "../../../public/icons/typescript.svg";
import dotnetIcon from "../../../public/icons/dotnet.svg";

const icons = [
  { name: "Next.js", icon: nextDotJSIcon },
  { name: "Tailwind", icon: tailWindIcon },
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
      <div className="mx-auto max-w-screen-sm px-6 darkmode-bg">
        <hr className="border-t border-gray-400 my-10" />
        <h2 className="text-xl font-bold">Technologies</h2>
        <div className="grid grid-cols-4 gap-6 mt-7">
          {icons.map((icon) => (
            <div
              key={icon.name}
              className="flex flex-col items-center p-4 rounded-lg bg-white/5"
            >
              <Image
                src={icon.icon}
                alt={icon.name}
                width={50}
                height={50}
                className="brightness-0 invert"
              />
              <span className="text-sm mt-4">{icon.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
