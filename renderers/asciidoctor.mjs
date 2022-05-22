import Processor from 'asciidoctor';

export default async function (source) {
  const processor = Processor();
  return await processor.convert(source, { standalone: true });
}
