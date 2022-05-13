import Markdoc from '@markdoc/markdoc';

export default function (source) {
  const ast = Markdoc.parse(source);
  const content = Markdoc.transform(ast, {});
  const html = Markdoc.renderers.html(content);
  const title = 'Markdoc';
  const tocHtml = 'TOC placeholder';

  return { html, title, tocHtml };
}
