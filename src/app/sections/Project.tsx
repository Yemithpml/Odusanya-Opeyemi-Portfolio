import projects from "@/data/projects";
import Image from "next/image";

function Projects() {
  return (
    <section id="projects" className="py-24 bg-gray-50 mt-0">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <h2 className="text-4xl md:text-6xl font-black text-center mb-16">
          Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group rounded-2xl bg-white border shadow-sm hover:shadow-xl transition duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-[260] w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-5">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-sm px-3 py-1 rounded-full bg-gray-100 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-black text-white text-sm font-medium hover:scale-105 transition"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg border text-sm font-medium hover:bg-gray-100 transition"
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