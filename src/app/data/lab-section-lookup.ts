import { LAB_SECTIONS } from './lab-sections';

export function getLabSection(path: string) {
  const section = LAB_SECTIONS.find((item) => item.path === path);

  if (!section) {
    throw new Error(`Unknown lab section: ${path}`);
  }

  return section;
}
