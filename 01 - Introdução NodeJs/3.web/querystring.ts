import querystring from 'querystring'

const baseUrl = 'https://example.com'
const uri = 'search?query=SãoPaulo'

// Concatena a base URL com o caminho, formando a URL completa
const url = `${baseUrl}/${uri}`

console.log('1º URL completa: ', url)

// Capturar os parâmetros da query string extraindo apenas a parte da query após o '?'
const parsedUri = querystring.parse(url.split('?')[1])

console.log('2º Capturando a query da URL: ', parsedUri)

// Codifica uma string para formato de query string.
const queryEscape = querystring.escape('SãoPaulo!')

console.log('3º SãoPaulo codificada em querystring: ', queryEscape)

// Decodifica uma string em formato de query string.
const queryUnescape = querystring.unescape(queryEscape)

console.log('4º Querystring ~> string: ', queryUnescape)
