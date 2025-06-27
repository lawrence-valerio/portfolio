import { MapPin, Heart, Github, Linkedin } from "lucide-react";

export default function Home() {
  return (
    <div>
      <div className="sticky top-12 mx-auto h-full w-full max-w-7xl sm:top-16">
        <div className="relative flex min-h-[calc(100dvh-5rem)] w-full flex-col justify-center py-8 sm:min-h-[calc(100dvh-8rem)]">
          <div className="mx-auto max-w-screen-sm px-6">
            <h1 className="text-5xl font-black mb-1">Hi, I'm Lawrence!</h1>
            <div className="flex items-center space-x-1 mb-9">
              <MapPin size={16} />
              <span className="text-xs">Manitoba</span>
            </div>
            <div className="mb-9">
              <p>
                I'm a Software & Web Developer. I love designing cool stuff and
                bringing it to life with code! Whether it’s a sleek website or a
                fun app, I enjoy turning ideas into things people can actually
                use and enjoy.
              </p>
              <p></p>
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
      <div className="relative z-0 pt-screen">
        <div className="mx-auto max-w-screen-sm px-6 darkmode-bg">
          <hr className="border-t border-gray-400 my-10" />
          <h2 className="text-xl font-bold mb-4">About Me</h2>
          <p></p>
          <div className="h-[100vh]" />
        </div>
      </div>
    </div>
  );
}
