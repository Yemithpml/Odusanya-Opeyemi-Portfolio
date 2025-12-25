import projects from "@/data/projects";
import Image from "next/image";

function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">

        <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-center mb-12">
          Projects
        </h2>

        <div className="grid gap-8 sm:gap-10 grid-cols-1 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group rounded-2xl bg-white/80 backdrop-blur-md border border-black/10 hover:border-black/20 shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_30px_70px_rgba(0,0,0,0.12)] transition-all duration-500 overflow-hidden"
            >
              {/* IMAGE */}
              <div className="relative h-[180px] sm:h-[220px] md:h-[240px] w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* CONTENT */}
              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
                  {project.title}
                </h3>

                <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs sm:text-sm px-3 py-1 rounded-full bg-black/5 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm px-4 py-2 rounded-lg bg-black text-white hover:scale-105 transition"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm px-4 py-2 rounded-lg border border-black/20 hover:bg-black/5 transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;
