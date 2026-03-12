export interface Project {
  id: string;
  title: string;
  year: number;
  slug: string;
  image: string;
  imageWidth?: number;
  imageHeight?: number;
}

export const projects: Project[] = [
  { id: '1', title: 'Project One', year: 2024, slug: '/projects/one', image: 'https://picsum.photos/620/930', imageWidth: 620, imageHeight: 930 },
  { id: '2', title: 'Project Two', year: 2024, slug: '/projects/two', image: 'https://picsum.photos/1920/1080', imageWidth: 1920, imageHeight: 1080 },
  { id: '3', title: 'Project Three', year: 2023, slug: '/projects/three', image: 'https://picsum.photos/1000/551', imageWidth: 1000, imageHeight: 551 },
  { id: '4', title: 'Project Four', year: 2023, slug: '/projects/four', image: 'https://picsum.photos/1031/693', imageWidth: 1031, imageHeight: 693 },
  { id: '5', title: 'Project Five', year: 2022, slug: '/projects/five', image: 'https://picsum.photos/1024/576', imageWidth: 1024, imageHeight: 576 },
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
