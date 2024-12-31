import http from 'http'

const server = http.createServer((req, res) => {
  const { method, url } = req

  const routes: Record<string, () => void> = {
    '/': () => {
      res.statusCode = 200
      res.end('Hello, world!')
    },
    '/ping': () => {
      res.statusCode = 200
      res.end(JSON.stringify({ message: 'pong' }))
    }
  }

  if (routes[url as string] && method === 'GET') {
    routes[url as string]()
  } else {
    res.statusCode = 404
    res.end(JSON.stringify({ message: 'Página não encontrada!' }))
  }
})

server.listen(3000, () => console.log('Servidor conectado!'))
