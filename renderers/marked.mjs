import { marked } from 'marked';

export default function (source) {
  const html = marked.parse(source);
  const title = 'marked';
  const tocHtml = 'TOC placeholder';

  return { html, title, tocHtml };
}
