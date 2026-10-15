const EXTERNAL = /^([a-z][a-z\d+.-]*:|\/\/|#)/i;

/**
 * Prefixes an internal path with the configured `base`, so links keep working
 * whether the site is served from the domain root or a repository subpath.
 * External URLs, `mailto:` links and fragment links are returned unchanged.
 */
export function withBase(path: string): string {
  if (EXTERNAL.test(path)) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}

export function isExternal(href: string): boolean {
  return /^(https?:)?\/\//i.test(href);
}
