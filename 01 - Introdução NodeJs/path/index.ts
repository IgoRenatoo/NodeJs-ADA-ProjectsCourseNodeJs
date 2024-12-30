import path from 'path'
import fs from 'fs'

const textPath = path.join(process.cwd(), 'text.txt')
const newTextPath = path.join(process.cwd(), 'new-text.txt')

const changedFile = () => {
  // Lê o arquivo de texto e divide cada linha em um array.
  const createArray: string[] = fs.readFileSync(textPath).toString().split('\n')

  // Limpa as linhas removendo o '\r' e adiciona o número da linha.
  const createArrayClean: string[] = createArray.map((line, i) => (`${i + 1}º Linha: ${line}`).replace('\r', ''))

  // Remove o último item do array com pop().
  createArrayClean.pop()

  // Escreve o conteúdo no novo arquivo sem o último item.
  fs.writeFileSync(newTextPath, createArrayClean.join('\n'))
}

changedFile()
