export interface Project {
  id: string;
  title: string;
  year: number;
  slug: string;
  image: string;
  imageWidth?: number;
  imageHeight?: number;
  outcome?: string;
  role?: string;
  stack?: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'FlexPool Journeyman',
    year: 2024,
    slug: '/projects/flexpool-journeyman',
    image: 'https://picsum.photos/620/930',
    imageWidth: 620,
    imageHeight: 930,
    outcome: 'Built a projection-based AR guidance system for hands-on skill learning in real environments.',
    role: 'Product Designer + Frontend Developer',
    stack: ['Astro', 'React', 'Tailwind'],
    liveUrl: 'https://devpost.com/software/journeyman-augmenting-personal-realities',
    githubUrl: '#',
  },
  {
    id: '2',
    title: 'SunBuddy',
    year: 2024,
    slug: '/projects/sunbuddy',
    image: 'https://picsum.photos/1920/1080',
    imageWidth: 1920,
    imageHeight: 1080,
    outcome: 'Built a wearable UV monitoring system with real-time alerts and companion app support.',
    role: 'Frontend Developer',
    stack: ['TypeScript', 'React', 'Storybook'],
    liveUrl: 'https://devpost.com/software/sun-buddy',
    githubUrl: '#',
  },
  {
    id: '3',
    title: 'NASA PRAG',
    year: 2023,
    slug: '/projects/nasa-prag',
    image: 'https://picsum.photos/1000/551',
    imageWidth: 1000,
    imageHeight: 551,
    outcome: 'Improved page performance and reduced bounce on mobile.',
    role: 'Frontend Performance Engineer',
    stack: ['Astro', 'Vite', 'Lighthouse'],
    liveUrl: 'https://2024.oceanopticsconference.org/abstract-ottaviani/',
    githubUrl: '#',
  },
  {
    id: '4',
    title: 'WaterXChange',
    year: 2023,
    slug: '/projects/waterxchange',
    image: 'https://picsum.photos/1031/693',
    imageWidth: 1031,
    imageHeight: 693,
    outcome: 'Designed and shipped an accessible interface for key flows.',
    role: 'UX Engineer',
    stack: ['HTML', 'CSS', 'TypeScript'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: '5',
    title: 'Graphics Projects',
    year: 2022,
    slug: '/projects/graphics-projects',
    image: 'https://picsum.photos/1024/576',
    imageWidth: 1024,
    imageHeight: 576,
    outcome: 'Built an internal dashboard to simplify reporting tasks.',
    role: 'Full Stack Developer',
    stack: ['React', 'Node.js', 'PostgreSQL'],
    liveUrl: '#',
    githubUrl: '#',
  },
];

export function getProjectsByYear(): Map<number, Project[]> {
  const byYear = new Map<number, Project[]>();
  for (const p of projects) {
    const list = byYear.get(p.year) ?? [];
    list.push(p);
    byYear.set(p.year, list);
  }
  for (const list of byYear.values()) {
    list.sort((a, b) => a.title.localeCompare(b.title));
  }
  const years = [...byYear.keys()].sort((a, b) => b - a);
  const sorted = new Map<number, Project[]>();
  for (const y of years) sorted.set(y, byYear.get(y)!);
  return sorted;
}
