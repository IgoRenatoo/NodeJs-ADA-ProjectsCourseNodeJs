const baseUrl = 'https://example.com'
const uri = 'search?query=SãoPaulo'

// Cria a URL completa a partir da classe construtora URL.
const urlFull = new URL(uri, baseUrl)

// Capturar os parâmetros da query string.
console.log('URL completa: ', urlFull.searchParams.get('query'))
