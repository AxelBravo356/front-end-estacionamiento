import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Usuario } from '../modelo/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  private urlEndPoint: string =
    'http://localhost:8081/api/usuarios';

  private httpHeaders = new HttpHeaders({ ContentType: 'application/json' });

  constructor(private http: HttpClient) { }

  recuperarUsuarios(): Observable<Usuario[]> {
    return this.http
      .get(this.urlEndPoint)
      .pipe(map((response) => response as Usuario[]));
  }

  recuperarUsuario(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.urlEndPoint}/${id}`);
  }

  crearUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.urlEndPoint, usuario, {
      headers: this.httpHeaders,
    });
  }

  actualizarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(
      `${this.urlEndPoint}/${usuario.idUsuario}`,
      usuario,
      {
        headers: this.httpHeaders,
      }
    );
  }

  eliminarUsuario(id: number): Observable<Usuario> {
    return this.http.delete<Usuario>(`${this.urlEndPoint}/${id}`, {
      headers: this.httpHeaders,
    });
  }

  getPDF(): Observable<Blob> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/pdf' });

    return this.http.get<Blob>(this.urlEndPoint + '/pdf', {
      headers: headers,
      responseType: 'blob' as 'json',
    });
  }

}
