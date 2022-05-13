import * as commonmark from 'commonmark';

export default function (source) {
  const reader = new commonmark.Parser();
  const writer = new commonmark.HtmlRenderer();
  const parsed = reader.parse(source);
  const html = writer.render(parsed);
  const title = 'commonmark.js';
  const tocHtml = 'TOC placeholder';

  return { html, title, tocHtml };
}
