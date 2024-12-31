import readline from 'readline'

// Cria uma interface para leitura do terminal, permitindo entrada e saída de texto.
const prompt = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// Objeto que encapsula métodos para trabalhar com o `prompt` usando Promises.
const promptPromise = {
  // Método que faz uma pergunta e retorna uma Promise com a resposta.
  question: (pergunta: string) => new Promise((resolve, reject) => {
    try {
      prompt.question((pergunta), resposta => resolve(resposta))
    } catch (error) {
      reject(error)
    }
  }),
  // Método para fechar a interface de leitura do terminal.
  close: () => prompt.close()
}

// Função assíncrona para interagir com o usuário.
async function askUser () {
  const answer1 = await promptPromise.question('Qual é seu número favorito favorita ? ')
  const answer2 = await promptPromise.question('Qual é a sua cor favorita ? ')
  console.log(`\nAs respostas foram: Seu número favorito é ${answer1}, cor favorita é ${answer2}!`)
  promptPromise.close()
}

askUser()
