import { EnumCategoriaProdutos } from "../enums/enum-categoria-produtos";

export interface Produto {
  nome: string;
  descricao: string;
  avaliação: number;
  cor: string;
  marca: string;
  preco: number;
  categoria: EnumCategoriaProdutos;
  urlImg:string;
}
