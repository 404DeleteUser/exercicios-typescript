
// exercicio 1: calcular imc
export function calcularIMC(peso: number, altura: number): number {
  return peso / (altura * altura);
}

// exercicio 2: formatar nome completo
export function formatarNome(nome: string, sobrenome?: string): string {
  if (sobrenome) {
    return `${nome} ${sobrenome}`;
  }
  return nome;
}

// exercicio 3: verificar maioridade
export function verificarMaioridade(idade: number): boolean {
  return idade >= 18;
}

// exercicio 4: interface de produto
export interface Produto {
  id: number;
  nome: string;
  preco: number;
  descricao?: string;
}

export function formatarProduto(produto: Produto): string {
  let resultado = `Produto #${produto.id}: ${produto.nome} - R$ ${produto.preco.toFixed(2)}`;
  if (produto.descricao) {
    resultado += ` (${produto.descricao})`;
  }
  return resultado;
}

// exercicio 5: filtrar numeros pares
export function filtrarPares(numeros: number[]): number[] {
  return numeros.filter(numero => numero % 2 === 0);
}

// exercicio 6: converter temperatura
export type UnidadeTemperatura = "celsius" | "fahrenheit";

export function converterTemperatura(valor: number, unidade: UnidadeTemperatura): number {
  if (unidade === "celsius") {
    // retorna em fahrenheit
    return (valor * 9/5) + 32;
  } else {
    // retorna em celsius
    return (valor - 32) * 5/9;
  }
}

// exercicio 7: contar ocorrencias (generico)
export function contarOcorrencias<T>(array: T[], elemento: T): number {
  return array.filter(item => item === elemento).length;
}

// exercicio 8: interface de aluno
export interface Aluno {
  nome: string;
  notas: number[];
  matricula: string;
}

export function calcularMedia(aluno: Aluno): number {
  if (aluno.notas.length === 0) return 0;
  const soma = aluno.notas.reduce((acumulador, nota) => acumulador + nota, 0);
  return soma / aluno.notas.length;
}

// exercicio 9: tipo de resposta de api (generico)
export type ApiResponse<T> = {
  sucesso: boolean;
  dados: T | null;
  erro: string | null;
};

export interface Usuario {
  id: number;
  nome: string;
  email: string;
}

export function buscarUsuarios(): ApiResponse<Usuario[]> {
  // retornando dados mockados conforme solicitado
  return {
    sucesso: true,
    dados: [
      { id: 1, nome: "Ana Silva", email: "ana@email.com" },
      { id: 2, nome: "Carlos Souza", email: "carlos@email.com" }
    ],
    erro: null
  };
}
