// src/app/components/Projects.tsx
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects">
      {projects.map((p) => (
        <div key={p.id}>{p.title}</div>
      ))}
    </section>
  );
}
