import { Assunto } from "./assunto";
import { Autor } from "./autor";

export interface Livro {
  codigo?: number;
  titulo: string;
  editora: string;
  edicao: number;
  anoPublicacao: string;
  valor: number;
  autor: Autor[];
  assunto: Assunto[];
}
