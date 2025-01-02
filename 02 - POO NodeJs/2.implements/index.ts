import { Item } from '../0.models'

//Criação do modelo padrão de negócio.
interface Foundation {
  sector: string
  manager?: number
  amountManager?(cod: number): string
}

// Criação da class para gerar instâncias de 'Business'.
class Business implements Foundation {
  constructor (
    private address: string,
    public sector: string,
    public itens: Item[],
    public manager?: number
  ) {
    this.manager = manager ?? 1
  }

  // Função que retorna apenas o nome dos itens, por padrão functions já vem public.
  returnItens () {
    return this.itens.map((item: { name: string }) => item.name)
  }

  // Função que manipula quantidade de gerentes, por padrão functions já vem public.
  amountManager (cod: 1 | 2): string {
    if (cod === 1 && this.manager) {
      this.manager++
      return 'Mais um gerente contratado!'
    } else if (cod === 2 && this.manager) {
      this.manager--
      return 'Um gerente foi demitido!'
    } else {
      return 'Código errado!'
    }
  }
}

// Criando uma farmácia instânciando a classe Business.
const pharmacy = new Business('Rua testando, 456 ', 'remedy', [
  { name: 'Paracetamol', price: 5.0 },
  { name: 'Ibuprofeno', price: 10.0 },
  { name: 'Amoxicilina', price: 20.0 },
  { name: 'Dipirona', price: 8.0 },
  { name: 'Omeprazol', price: 15.0 }
])

console.log('1º', pharmacy)
console.log('2º', pharmacy.amountManager(1))
console.log('3º', pharmacy.manager, `gerentes ativos!`)
