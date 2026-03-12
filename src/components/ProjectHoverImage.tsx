import type { Project } from '../data/projects';

interface Props {
  project: Project | null;
}

export default function ProjectHoverImage({ project }: Props) {
  if (!project) return null;
  return (
    <picture className="flex justify-center items-center">
      <img
        src={project.image}
        alt=""
        className="z-50 object-contain max-h-[80vh] w-auto"
        loading="lazy"
        width={project.imageWidth}
        height={project.imageHeight}
      />
    </picture>
  );
}
