import { getCollection, type CollectionEntry } from 'astro:content';

export type Project = CollectionEntry<'projects'>;

/** Published projects sorted by `order`, then most recent start date. Drafts are included only in dev. */
export async function getProjects(): Promise<Project[]> {
  const entries = await getCollection('projects', ({ data }) => import.meta.env.DEV || !data.draft);
  return entries.sort(
    (a, b) => a.data.order - b.data.order || b.data.startDate.valueOf() - a.data.startDate.valueOf(),
  );
}

const monthYear = new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric', timeZone: 'UTC' });

export function formatDateRange(start: Date, end?: Date): string {
  return `${monthYear.format(start)} – ${end ? monthYear.format(end) : 'Present'}`;
}
