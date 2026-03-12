import { useState } from 'react';
import type { Project } from '../data/projects';
import ProjectYearRow from './ProjectYearRow';
import ProjectHoverImage from './ProjectHoverImage';

interface Props {
  projectsByYear: [number, Project[]][];
}

export default function ProjectsSection({ projectsByYear }: Props) {
  const [hoverProject, setHoverProject] = useState<Project | null>(null);

  return (
    <>
      <section className="w-full pt-3">
        <div className="w-full space-y-0">
          {projectsByYear.map(([year, projects]) => (
            <ProjectYearRow
              key={year}
              year={year}
              projects={projects}
              onHover={setHoverProject}
            />
          ))}
        </div>
        <div className="z-50 fixed hidden md:flex right-0 top-1/2 -translate-y-1/2 w-[min(45vw,560px)] h-[80vh] justify-center items-center pointer-events-none">
          <div className="pointer-events-none">
            <ProjectHoverImage project={hoverProject} />
          </div>
        </div>
      </section>
    </>
  );
}
