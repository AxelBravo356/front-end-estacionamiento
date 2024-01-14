import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Entrada } from '../modelo/Entrada';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EntradaService {
  private urlEndPoint: string =
  'http://localhost:8081/api/entradas';

private httpHeaders = new HttpHeaders({ ContentType: 'application/json' });

constructor(private http: HttpClient) { }

recuperarEntradas(): Observable<Entrada[]> {
  return this.http
    .get(this.urlEndPoint)
    .pipe(map((response) => response as Entrada[]));
}

recuperarEntrada(id: number): Observable<Entrada> {
  return this.http.get<Entrada>(`${this.urlEndPoint}/${id}`);
}

creaEntrada(entrada: Entrada): Observable<Entrada> {
  return this.http.post<Entrada>(this.urlEndPoint, entrada, {
    headers: this.httpHeaders,
  });
}

actualizarEntrada(entrada: Entrada): Observable<Entrada> {
  return this.http.put<Entrada>(
    `${this.urlEndPoint}/${entrada.idEntrada}`,
    entrada,
    {
      headers: this.httpHeaders,
    }
  );
}

eliminarEntrada(id: number): Observable<Entrada> {
  return this.http.delete<Entrada>(`${this.urlEndPoint}/${id}`, {
    headers: this.httpHeaders,
  });
}
}
