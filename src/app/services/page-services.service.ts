import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Imagem } from '../model/imagem';
import { Produto } from '../model/produto';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class PageServicesService {

  private linkProdutos:string = 'http://localhost:3000/produtos';
  private linkUsers:string = 'http://localhost:3000/usuarios';
  private linkImagens:string = '  http://localhost:3000/imagens';

  constructor(private http: HttpClient) { }

  getProdutos(): Observable<Produto[]>{
    return this.http.get<Produto[]>(`${this.linkProdutos}`);
  }

  getProduto(idProduto: number): Observable<Produto>{
    return this.http.get<Produto>(`${this.linkProdutos}/${idProduto}`);
  }

  postProduto(produto: Produto): Observable<Produto>{
    return this.http.post<Produto>(`${this.linkProdutos}`, produto);
  }

  putProduto(idProduto: number, produto: Produto): Observable<Produto>{
    return this.http.put<Produto>(`http://localhost:3000/usuarios/${idProduto}`, produto);
  }

  deleteProduto(idProduto: number):Observable<Produto>{
    return this.http.delete<Produto>(`http://localhost:3000/usuarios/${idProduto}`);
  }

  getUsers(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(`${this.linkUsers}`);
  }

  getUser(idUsuario: number): Observable<Usuario>{
    return this.http.get<Usuario>(`${this.linkUsers}/${idUsuario}`);
  }

  postUser(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(`${this.linkUsers}`, usuario);
  }

  putUser(idUsuario: number, usuario: Usuario): Observable<Usuario>{
    return this.http.put<Usuario>(`http://localhost:3000/usuarios/${idUsuario}`, usuario);
  }

  deleteUser(idUsuario: number):Observable<Usuario>{
    return this.http.delete<Usuario>(`http://localhost:3000/usuarios/${idUsuario}`);
  }

  getImagens(): Observable<Imagem[]>{
    return this.http.get<Imagem[]>(`${this.linkImagens}`);
  }
}
