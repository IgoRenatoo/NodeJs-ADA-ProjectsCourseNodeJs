import { Item } from '../0.models'

// Criação da class para gerar instâncias de 'Business'.
class Business {
  constructor (
    private address: string,
    public sector: string,
    public itens: Item[],
    public box?: number
  ) {
    this.box = box ?? 5
  }

  // Função que retorna apenas o nome dos itens, por padrão functions já vem Public.
  returnItens () {
    return this.itens.map((item: { name: string }) => item.name)
  }

  // Função que manipula quantidade de box, por padrão functions já vem Public.
  changedBox (cod: 1 | 2): string {
    if (cod === 1 && this.box) {
      this.box++
      return 'Quantidade adicionado!'
    } else if (cod === 2 && this.box) {
      this.box--
      return 'Quantidade subtraída!'
    } else {
      return 'Código errado!'
    }
  }
}

// Criando uma padaria como objeto simples, sem uso de classe.
const bakery1 = {
  address: 'Rua do teste, 123 - Testelandia',
  type: 'food',
  itens: [
    { name: 'Pão Francês', price: 0.5 },
    { name: 'Croissant', price: 3.5 },
    { name: 'Bolo de Cenoura', price: 15.0 },
    { name: 'Torta de Maçã', price: 20.0 },
    { name: 'Coxinha', price: 5.0 }
  ]
}

// Criando uma padaria instânciando a classe Business.
const bakery2 = new Business('Rua testando, 456 ', 'food', [
  { name: 'Pão Francês', price: 0.5 },
  { name: 'Croissant', price: 3.5 },
  { name: 'Bolo de Cenoura', price: 15.0 },
  { name: 'Torta de Maçã', price: 20.0 },
  { name: 'Coxinha', price: 5.0 }
])

console.log('1º', bakery1) // Exibi o objeto criado de forma manual.
console.log('1º', bakery1) // Exibi o objeto criado com a classe construtora.
console.log('3º', bakery2.changedBox(1)) // Retorna o resultado da operação.
console.log('4º', bakery2.box, `box disponíveis`) // Exibi a quantidade de box disponíveis.
