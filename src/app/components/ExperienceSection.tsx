const experiences = [
  {
    name: "Rival Insurance Technology",
    position: "Software Developer",
    yearStart: "2025",
    yearEnd: "Present",
    description:
      "Contributed to the development and maintenance of a Broker Management System (BMS) for insurance companies, improving system performance, and enhancing workflows",
    techStack: [".NET Framework", "VB6", "C#"],
  },
  {
    name: "Red River College",
    position: "Developer Intern",
    yearStart: "2021",
    yearEnd: "2021",
    description:
      "Built a 3D virtual reality web app that allows students to interact in a shared virtual space and attend immersive classes and meetings",
    techStack: ["React.js", "Three.js", "Blender"],
  },
  {
    name: "In Your Shoes",
    position: "Developer Intern",
    yearStart: "2021",
    yearEnd: "2021",
    description:
      "Redesigned and developed a responsive web app using React, Bootstrap, and Django, and adding a messaging feature for users to communicate",
    techStack: ["React.js", "Django"],
  },
];

export const ExperienceSection = () => {
  return (
    <div className="relative z-0 pt-screen">
      <div className="mx-auto max-w-screen-sm py-3 px-6 darkmode-bg">
        <hr className="border-t border-gray-400 my-10" />
        <h2 className="text-xl font-bold">Experience</h2>
        <div className="mt-7">
          <div className="mt-7">
            {experiences.map((experience) => (
              <div
                key={experience.name}
                className="flex flex-col md:flex-row mt-6"
              >
                <p className="min-w-29 text-sm">
                  {experience.yearStart} - {experience.yearEnd}
                </p>
                <div className="flex flex-wrap">
                  <p>{experience.name}</p>

                  <p className="ml-2">
                    -<span className="ml-2">{experience.position}</span>
                  </p>

                  <p className="mt-2 text-sm text-gray-400">
                    {experience.description}
                  </p>
                  <div className="flex flex-wrap text-xs mt-2 gap-2">
                    {experience.techStack.map((tech) => (
                      <p
                        key={tech}
                        className="rounded-full bg-white/5 px-2 py-1"
                      >
                        {tech}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
