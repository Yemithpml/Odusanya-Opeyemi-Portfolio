"use client";

import Marquee from "react-fast-marquee";
import { Icons } from "./icons";

const techStack = [
  {
    title: "HTML",
    icon: <Icons.html className="w-5 h-5 text-foreground/60 group-hover:text-black dark:group-hover:text-white transition-all duration-500" />,
  },
  {
    title: "CSS",
    icon: <Icons.css className="w-5 h-5 text-foreground/60 group-hover:text-black dark:group-hover:text-white transition-all duration-500" />,
  },
  {
    title: "JavaScript",
    icon: <Icons.javascript className="w-5 h-5 text-foreground/60 group-hover:text-black dark:group-hover:text-white transition-all duration-500" />,
  },
  {
    title: "TypeScript",
    icon: <Icons.typescript className="w-5 h-5 text-foreground/60 group-hover:text-black dark:group-hover:text-white transition-all duration-500" />,
  },
  {
    title: "React",
    icon: <Icons.react className="w-5 h-5 text-foreground/60 group-hover:text-black dark:group-hover:text-white transition-all duration-500" />,
  },
  {
    title: "Next.js",
    icon: <Icons.nextjs className="w-5 h-5 text-foreground/60 group-hover:text-black dark:group-hover:text-white transition-all duration-500" />,
  },
  {
    title: "Tailwind",
    icon: <Icons.tailwind className="w-5 h-5 text-foreground/60 group-hover:text-black dark:group-hover:text-white transition-all duration-500" />,
  },
  {
    title: "GitHub",
    icon: <Icons.gitHub className="w-5 h-5 md:text-foreground/60 group-hover:text-black dark:group-hover:text-white transition-all duration-500" />,
  },
  {
    title: "Vercel",
    icon: <Icons.vercel className="w-5 h-5 md:text-foreground/60 group-hover:text-black dark:group-hover:text-white transition-all duration-500" />,
  },
{ 
    title: "Figma",
    icon: <Icons.figma className="w-5 h-5 md:text-foreground/60 group-hover:text-black dark:group-hover:text-white transition-all duration-500" />,
  },
  {
    title: "Vite",
    icon: <Icons.vite className="w-5 h-5 md:text-foreground/60 group-hover:text-black dark:group-hover:text-white transition-all duration-500" />,
  },
];

export default function TechStack() {
  return (
    <section className="container mt-14 overflow-hidden">
      <Marquee speed={40} gradient={false}>
        {techStack.map((tech) => (
          <div
            key={tech.title}
            className="group ml-5 flex items-center gap-2 rounded-full border px-4 py-[7px] font-medium cursor-pointer transition-all duration-500 hover:border-black dark:hover:border-white"
          >
            {tech.icon}
            <span className="text-foreground/60 font-semibold transition-all duration-500 group-hover:text-black dark:group-hover:text-white">
              {tech.title}
            </span>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
