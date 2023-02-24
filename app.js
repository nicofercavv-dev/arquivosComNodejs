const Reader = require('./Reader')
const Processor = require('./Processor')
const Writer = require('./Writer')
const Table = require('./Table')
const HtmlParser = require('./HtmlParser')
const PDFWriter = require('./PDFWriter')

const leitor = new Reader()
const escritor = new Writer()

async function main () {
  const dados = await leitor.Read('./users.csv')
  const dadosProcessados = Processor.Process(dados)
  const usuarios = new Table(dadosProcessados)

  const html = await HtmlParser.Parse(usuarios)
  
  escritor.Write('tabelaDeUsuarios.html', html)
  PDFWriter.WritePDF(Date.now() + '.PDF', html)
}

main()