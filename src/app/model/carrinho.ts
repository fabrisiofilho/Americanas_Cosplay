import { Produto } from "./produto";

export interface Carrinho {
  produtos: Array<Produto>;
  precoCarrinho: number;
}
