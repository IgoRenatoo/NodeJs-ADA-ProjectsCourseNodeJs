import { Item } from '../0.models'

//Criação do modelo padrão de negócio.
interface Foundation {
  sector: string
  manager?: number
  amountManager?(cod: number): string
}

// Criação da class para gerar instâncias de 'Business'.
class Business implements Foundation {
  protected _manager: number

  constructor (
    protected address: string, // Habilita o uso em herança.
    public sector: string,
    public itens: Item[],
    manager: number = 1
  ) {
    // Validando que o número de gerentes não é negativo
    this._manager = manager >= 0 ? manager : 1
  }

  get manager (): number {
    return this._manager
  }

  // Getter e Setter para manager, garantindo que o valor não seja negativo.
  set manager (value: number) {
    if (value >= 0) {
      this._manager = value
    } else {
      console.warn('Número de gerentes não pode ser negativo.')
    }
  }

  // Função que retorna apenas o nome dos itens.
  returnItens () {
    return this.itens.map((item: { name: string }) => item.name)
  }

  // Função que manipula quantidade de gerentes.
  amountManager (cod: 1 | 2): string {
    if (cod === 1 && this._manager) {
      this._manager++
      return 'Mais um gerente contratado!'
    } else if (cod === 2 && this._manager) {
      this._manager--
      return 'Um gerente foi demitido!'
    } else {
      return 'Código errado!'
    }
  }
}

// Criação da class para gerar instâncias extendidas de 'Business'.
class MarketPlace extends Business {
  constructor (
    protected address: string,
    public sector: string,
    public itens: Item[],
    manager?: number
  ) {
    super(address, sector, itens, manager)
  }
}
// Criando um supermercado extendendo a classe Business que tá implementando Foundation.
const marketplace = new MarketPlace('Rua Testando, 789', 'Market', [
  { name: 'Arroz', price: 20.0 },
  { name: 'Feijão', price: 8.0 },
  { name: 'Açúcar', price: 5.0 },
  { name: 'Óleo de soja', price: 10.0 },
  { name: 'Farinha de trigo', price: 6.0 }
], 3)

console.log('1º', marketplace)
console.log('2º', marketplace.amountManager(1))
console.log('3º', marketplace.manager, `gerentes ativos!`)
