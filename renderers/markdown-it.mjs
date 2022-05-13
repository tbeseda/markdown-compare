import MarkdownIt from 'markdown-it';

export default function (source) {
  const md = new MarkdownIt();
  const html = md.render(source);
  const title = 'markdown-it';
  const tocHtml = 'TOC placeholder';

  return { html, title, tocHtml };
}
