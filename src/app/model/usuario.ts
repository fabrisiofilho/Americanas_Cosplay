import { EnumSexoUsuario } from "../enums/enum-sexo-usuario";
import { EnumTipoDeUsuario } from "../enums/enum-tipo-de-usuario";
import { Carrinho } from "./carrinho";
import { Endereco } from "./endereco";
import { MetodoPagamento } from "./metodo-pagamento";
import { Produto } from "./produto";

export interface Usuario {
  nome: string;
  sobrenome: string;
  sexo: EnumSexoUsuario;
  tipo:EnumTipoDeUsuario;
  endereco: Endereco;
  email: string;
  telefone: string;
  carrinho: Carrinho;
  favoritos: Array<Produto>;
  cpf: string;
  medotoPagamento: MetodoPagamento;
}
