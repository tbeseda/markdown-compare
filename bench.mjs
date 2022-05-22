import { readFileSync } from 'fs';
import Benchmark from 'benchmark';
import arcdown from './renderers/arcdown.mjs';
import asciidoctor from './renderers/asciidoctor.mjs';
import commonmark from './renderers/commonmark.mjs';
import markdoc from './renderers/markdoc.mjs';
import markdownIt from './renderers/markdown-it.mjs';
import marked from './renderers/marked.mjs';
import showdown from './renderers/showdown.mjs';
import snarkdown from './renderers/snarkdown.mjs';

const { dependencies } = JSON.parse(
  readFileSync(new URL('./package.json', import.meta.url), 'utf8'),
);
const source = readFileSync(new URL('./test.md', import.meta.url), 'utf8');
const adocSource = readFileSync(new URL('./test.adoc', import.meta.url), 'utf8');

const suite = new Benchmark.Suite();

suite
  .add(
    `commonmark    @ v${dependencies.commonmark}`,
    () => {
      const result = commonmark(source);
    },
  )
  .add(
    `markdoc       @ v${dependencies['@markdoc/markdoc']}`,
    () => {
      const result = markdoc(source);
    },
  )
  .add(
    `markdown-it   @ v${dependencies['markdown-it']}`,
    () => {
      const result = markdownIt(source);
    },
  )
  .add(
    `marked        @ v${dependencies.marked}`,
    () => {
      const result = marked(source);
    },
  )
  .add(
    `showdown      @ v${dependencies.showdown}`,
    () => {
      const result = showdown(source);
    },
  )
  .add(
    `snarkdown     @ v${dependencies.snarkdown}`,
    () => {
      const result = snarkdown(source);
    },
  )
  .add(
    `*arcdown      @ v${dependencies.arcdown}`,
    {
      defer: true,
      fn: async (deferred) => {
        const result = await arcdown(source);
        deferred.resolve();
      },
    },
  )
  .add(
    `**asciidoctor @ v${dependencies.asciidoctor}`,
    () => {
      const result = asciidoctor(adocSource);
    },
  )
  .on(
    'cycle',
    function (event) {
      console.log(String(event.target));
    },
  )
  .on(
    'complete',
    function () {
      console.log(`${this.filter('fastest').map('name')} is fastest!`);
    },
  )
  .run({ 'async': true });
