
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
    cpf: '11122233344',
    contaAplicacao: '010203-4',
    contaCorrente: '020304-5',
    situacaoCpf: 'Regular'
  },
  {
    nome: 'Alberto Gomes da Rocha',
    cpf: '33322211144',
    contaAplicacao: '010203-4',
    contaCorrente: '020304-5',
    situacaoCpf: 'Irregular'
  },
  {
    nome: 'Rosana Silva Prudente',
    cpf: '11133322244',
    contaAplicacao: '010203-4',
    contaCorrente: '020304-5',
    situacaoCpf: 'Irregular'
  },
  {
    nome: 'Sonia Germano de Moraes',
    cpf: '22233311144',
    contaAplicacao: '010203-4',
    contaCorrente: '020304-5',
    situacaoCpf: 'Regular'
  },
]
