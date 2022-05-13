import snarkdown from 'snarkdown';

export default function (source) {
  const html = snarkdown(source);
  const title = 'snarkdown';
  const tocHtml = 'TOC placeholder';

  return { html, title, tocHtml };
}
