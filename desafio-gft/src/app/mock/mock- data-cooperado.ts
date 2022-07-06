export interface data {
  texto: string,
  subTexto: string,
  label1: string,
  label2: string,
  temBotao: boolean,
  tipo: number,
}

export const mockData: Array<data> = [
  {
    texto: 'Situação cadastral do CPF',
    subTexto: 'Consulta na Receita Federal',
    label1: 'Nome',
    label2: 'Situação do CPF',
    temBotao: false,
    tipo: 0,
  },
  {
    texto: 'Conta aplicação',
    subTexto: 'Cooperativa Viacredi',
    label1: 'Número da conta',
    label2: 'Duplicar conta',
    temBotao: true,
    tipo: 1
  },
  {
    texto: 'Conta corrente',
    subTexto: 'Cooperativa Viacredi',
    label1: 'Número da conta',
    label2: 'Duplicar conta',
    temBotao: true,
    tipo: 2
  },
]
