Node.js Markdown to HTML benchmarks

Recent result (with Node 16.14.2 on MacBook M1 Pro 32 GB RAM):

With `benchmark`

```
commonmark  @ v^0.30.0 x 1681 ops/sec ±0.22% (99 runs sampled)
markdoc     @ v^0.1.2  x 429 ops/sec  ±0.34% (96 runs sampled)
markdown-it @ v^13.0.1 x 771 ops/sec  ±0.45% (96 runs sampled)
marked      @ v^4.0.15 x 736 ops/sec  ±0.85% (97 runs sampled)
showdown    @ v^2.1.0  x 156 ops/sec  ±0.33% (89 runs sampled)
snarkdown   @ v^2.0.0  x 957 ops/sec  ±0.19% (98 runs sampled)
*arcdown    @ v^0.3.1  x 466 ops/sec  ±4.30% (84 runs sampled)

commonmark  @ v^0.30.0 is fastest!
```

With simple `console.time`

```
commonmark: 713.146ms
markdoc: 2.460s
markdownIt: 1.450s
marked: 1.472s
showdown: 6.881s
snarkdown: 1.084s
*arcdown: 2.142s
```

*[`arcdown`](https://github.com/architect/arcdown) is a `markdown-it` wrapper with a few bundled plugins and niceties for rendering Markdown from a cloud function.

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
