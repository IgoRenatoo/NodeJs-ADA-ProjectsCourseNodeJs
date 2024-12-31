import crypto from 'crypto'

// Gera uma chave aleatória de 12 bytes e a converte para o formato base64
const key = crypto.randomBytes(12).toString('base64')
console.log(key)

// Gera um UUID (Universally Unique Identifier) usando o método 'crypto.randomUUID'
const uuid = crypto.randomUUID()
console.log(uuid)

// Gera um par de chaves assimétricas (pública e privada) usando o algoritmo 'x448'
const { privateKey, publicKey } = crypto.generateKeyPairSync('x448', { modulesLength: 2048 })
console.log(privateKey,',', publicKey)
