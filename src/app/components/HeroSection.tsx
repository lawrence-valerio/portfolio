import { MapPin, Heart, Github, Linkedin } from "lucide-react";

export const HeroSection = () => {
  return (
    <div className="sticky top-12 mx-auto h-full w-full max-w-7xl sm:top-16">
      <div className="relative flex min-h-[calc(100dvh-5rem)] w-full flex-col justify-center py-8 sm:min-h-[calc(100dvh-5rem)]">
        <div className="mx-auto max-w-screen-sm px-6">
          <h1 className="text-5xl font-black mb-1">{`Hi, I'm Lawrence!`}</h1>
          <div className="flex items-center space-x-1 mb-9">
            <MapPin size={16} />
            <span className="text-xs">Manitoba</span>
          </div>
          <div className="mb-9">
            <p>
              {`
              I'm a Software & Web Developer. I love designing cool stuff and
              bringing it to life with code! Whether it’s a sleek website or a
              fun app, I enjoy turning ideas into things people can actually use
              and enjoy.`}
            </p>
          </div>
          <div className="flex items-center space-x-1 mb-9">
            <Heart />
            <span>100</span>
          </div>
          <div className="flex items-center space-x-2">
            <Github size={30} />
            <Linkedin size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};
