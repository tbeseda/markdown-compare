export default function (props) {
  const { title, body, toc } = props;

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${title}</title>
    <link rel="stylesheet" href="https://unpkg.com/highlight.js@11.5.1/styles/night-owl.css">
    <style>
      body {
        font-family: system-ui;
        padding: 1rem 3rem;
        display: grid;
        grid-template-columns: 1fr minmax(150px, 25%);
        gap: 2rem;
      }
      pre {
        background: #333;
        color: #fff;
        padding: 1rem;
      }
    </style>
  </head>
  <body>
    <main>
      <h1>${title}</h1>
      ${body}
    </main>
    <nav>
      <h3>Navigation</h3>
      ${toc}
    </nav>
  </body>
</html>`;
}
