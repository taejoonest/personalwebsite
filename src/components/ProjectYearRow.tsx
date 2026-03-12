import { useState } from 'react';
import type { Project } from '../data/projects';
import ProjectHoverImage from './ProjectHoverImage';

interface Props {
  year: number;
  projects: Project[];
  hoverImage: Project | null;
  onHover: (p: Project | null) => void;
}

export default function ProjectYearRow({ year, projects, hoverImage, onHover }: Props) {
  return (
    <div className="w-full mb-14">
      <div className="text-xs text-[hsl(var(--foreground))]/60 mb-2">{year}</div>
      <ul className="list-none m-0 p-0 space-y-1">
        {projects.map((p) => (
          <li key={p.id}>
            <a
              href={p.slug}
              className="underline-offset-4 hover:underline text-lg md:text-xl"
              onMouseEnter={() => onHover(p)}
              onMouseLeave={() => onHover(null)}
            >
              {p.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
