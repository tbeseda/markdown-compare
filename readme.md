Node.js Markdown to HTML benchmarks

Recent result (with Node 16.14.2 on MacBook M1 Pro 32 GB RAM):

With `benchmark`

```
commonmark    @ v^0.30.0 x 378 ops/sec ±0.73% (92 runs sampled)
markdoc       @ v^0.1.2  x 200 ops/sec ±0.68% (86 runs sampled)
markdown-it   @ v^13.0.1 x 367 ops/sec ±0.61% (90 runs sampled)
marked        @ v^4.0.16 x 420 ops/sec ±0.52% (94 runs sampled)
showdown      @ v^2.1.0  x 88.53 ops/sec ±0.27% (77 runs sampled)
snarkdown     @ v^2.0.0  x 681 ops/sec ±0.36% (97 runs sampled)
*arcdown      @ v^0.3.2  x 259 ops/sec ±2.12% (87 runs sampled)
**asciidoctor @ v^2.2.6  x 47.58 ops/sec ±2.37% (65 runs sampled)

snarkdown   @ v^2.0.0 is fastest!
```

With simple `console.time`

```
commonmark: 2.670s
markdoc: 4.729s
markdownIt: 2.691s
marked: 2.389s
showdown: 11.366s
snarkdown: 1.472s

*arcdown: 3.858s
**asciidoctor: 20.362s
```

*[`arcdown`](https://github.com/architect/arcdown) is a `markdown-it` wrapper with a few bundled plugins and niceties for rendering Markdown from a cloud function.

**[`asciidcotor`](https://docs.asciidoctor.org/asciidoctor.js/latest/setup/quick-tour/) is not a Markdown renderer. It's a "asciidoc" processor. Here for general interest in the format.

## Create sample HTML

```sh
npm i
node create-html.mjs
```

## Run benchmark

```sh
npm i
node bench.mjs # or timer.mjs
```
