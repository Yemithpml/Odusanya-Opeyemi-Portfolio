import Image from "next/image";
import Greetings from "./Greetings";
import TechStack from "./tech-stack";

function Hero() {
  return (
    <section
      id="home"
      className="mt-40 md:mt-5  flex flex-col justify-center overflow-x-hidden bg-white"
    >
      <div className="w-full max-w-6xl mx-auto px-6 md:px-12 lg:ml-40 xl:ml-56">
        
        <div className="mb-6 mt-0 md:mt-20">
          <Image
            src="/hero.jpg"
            alt="Opeyemi"
            width={128}
            height={128}
            priority
            className="rounded-full object-cover"
          />
        </div>

        <Greetings />

        <div className="mt-4">
          <h1 className="text-5xl md:text-6xl font-bold">
            I'm Opeyemi
          </h1>

          <p className="mt-4 text-lg md:text-2xl text-gray-600 max-w-xl">
            I'm a Front-End Engineer in the React Ecosystem.
            <br />
            Opened to gaining experience with building scalable web applications.
          </p>
        </div>

        <div className="mt-8 flex gap-4">
          <a
            href="#projects"
            className="px-6 py-2 rounded-lg bg-black text-white hover:scale-105 transition inline-block"
          >
            Projects
          </a>
          <a
            href="/resume.pdf"
            className="px-6 py-2 rounded-lg border hover:bg-gray-100 transition inline-block"
          >
            Resume
          </a>
        </div>
      </div>
      
      <div className="w-full overflow-x-hidden">
        <TechStack />
      </div>
    </section>
  );
}

export default Hero;
