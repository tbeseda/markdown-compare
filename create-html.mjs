import { readFileSync, writeFileSync } from 'fs';
import HTML from './template.mjs';

import arcdown from './renderers/arcdown.mjs';
import commonmark from './renderers/commonmark.mjs';
import markdoc from './renderers/markdoc.mjs';
import markdownIt from './renderers/markdown-it.mjs';
import marked from './renderers/marked.mjs';
import showdown from './renderers/showdown.mjs';
import snarkdown from './renderers/snarkdown.mjs';

import asciidoctor from './renderers/asciidoctor.mjs';

const source = readFileSync(new URL('./test.md', import.meta.url), 'utf8');

const fns = {
  arcdown,
  commonmark,
  markdoc,
  markdownIt,
  marked,
  showdown,
  snarkdown,
};

for (const fn in fns) {
  const { html, title, tocHtml } = await fns[fn](source);

  writeFileSync(
    new URL(`./html/${fn}.html`, import.meta.url),
    HTML({ title, body: html, toc: tocHtml }),
  );
}

const adocSource = readFileSync(new URL('./test.adoc', import.meta.url), 'utf8');
const html = await asciidoctor(adocSource);

writeFileSync(
  new URL('./html/asciidoctor.html', import.meta.url),
  HTML({ title: 'Asciidoctor', body: html }),
);
