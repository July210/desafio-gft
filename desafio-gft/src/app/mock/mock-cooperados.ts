
export interface ListaCooperados {
  nome: string,
  cpf: string,
  contaAplicacao: string,
  contaCorrente: string,
  situacaoCpf: 'Regular' | 'Irregular' ,
};

export const mockCooperados: Array<ListaCooperados> = [
  {
    nome: 'Maria Alves Santos',
    cpf: '111.222.333-44',
    contaAplicacao: '010203-4',
    contaCorrente: '020304-5',
    situacaoCpf: 'Regular'
  },
  {
    nome: 'Alberto Gomes da Rocha',
    cpf: '333.222.111-44',
    contaAplicacao: '010203-4',
    contaCorrente: '020304-5',
    situacaoCpf: 'Irregular'
  },
  {
    nome: 'Rosana Silva Prudente',
    cpf: '111.333.222-44',
    contaAplicacao: '010203-4',
    contaCorrente: '020304-5',
    situacaoCpf: 'Irregular'
  },
  {
    nome: 'Sonia Germano de Moraes',
    cpf: '222.333.111-44',
    contaAplicacao: '010203-4',
    contaCorrente: '020304-5',
    situacaoCpf: 'Regular'
  },
]
