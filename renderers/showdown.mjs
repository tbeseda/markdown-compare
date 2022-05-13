import showdown from 'showdown';

export default function (source) {
  const converter = new showdown.Converter();
  const html = converter.makeHtml(source);
  const title = 'Showdown';
  const tocHtml = 'TOC placeholder';

  return { html, title, tocHtml };
}
