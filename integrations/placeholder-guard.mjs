import { readdir, readFile } from 'node:fs/promises';
import { extname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const MARKER = '[[TODO';
const TEXT_EXTENSIONS = new Set(['.html', '.xml', '.txt', '.json', '.js', '.css', '.webmanifest']);

/**
 * Fails the production build if any `[[TODO ...]]` marker reaches the output.
 * Use these markers for unverified facts while drafting; drafts and dev-only
 * pages are never written to `dist/`, so only published content is checked.
 */
export default function placeholderGuard() {
  return {
    name: 'placeholder-guard',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        const root = fileURLToPath(dir);
        const entries = await readdir(root, { recursive: true, withFileTypes: true });
        const offenders = [];

        for (const entry of entries) {
          if (!entry.isFile() || !TEXT_EXTENSIONS.has(extname(entry.name))) continue;
          const path = join(entry.parentPath, entry.name);
          const lines = (await readFile(path, 'utf8')).split('\n');
          lines.forEach((line, i) => {
            if (line.includes(MARKER)) offenders.push(`${relative(root, path)}:${i + 1}`);
          });
        }

        if (offenders.length > 0) {
          throw new Error(
            `Found ${offenders.length} unresolved ${MARKER} marker(s) in the build output:\n  ` +
              offenders.join('\n  '),
          );
        }
        logger.info('No placeholder markers in build output.');
      },
    },
  };
}
