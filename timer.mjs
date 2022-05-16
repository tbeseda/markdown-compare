import { readFileSync } from 'fs';
import arcdown from './renderers/arcdown.mjs';
import commonmark from './renderers/commonmark.mjs';
import markdoc from './renderers/markdoc.mjs';
import markdownIt from './renderers/markdown-it.mjs';
import marked from './renderers/marked.mjs';
import showdown from './renderers/showdown.mjs';
import snarkdown from './renderers/snarkdown.mjs';

const N = 1000;

const source = readFileSync(new URL('./test.md', import.meta.url), 'utf8');

const renderers = {
  commonmark,
  markdoc,
  markdownIt,
  marked,
  showdown,
  snarkdown,
  arcdown,
};

for (const renderer in renderers) {
  const render = renderers[renderer];
  console.time(renderer);

  for (let i = 0; i < N; i++) {
    const result = await render(source);
  }

  console.timeEnd(renderer);
}
