import { Injectable } from '@angular/core';
import { Salida } from '../modelo/Salida';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SalidaService {
  private urlEndPoint: string =
  'http://localhost:8081/api/Salidas';

private httpHeaders = new HttpHeaders({ ContentType: 'application/json' });

constructor(private http: HttpClient) { }

recuperarSalidas(): Observable<Salida[]> {
  return this.http
    .get(this.urlEndPoint)
    .pipe(map((response) => response as Salida[]));
}

recuperarSalida(id: number): Observable<Salida> {
  return this.http.get<Salida>(`${this.urlEndPoint}/${id}`);
}

creaSalida(salida: Salida): Observable<Salida> {
  return this.http.post<Salida>(this.urlEndPoint, salida, {
    headers: this.httpHeaders,
  });
}

actualizarSalida(salida: Salida): Observable<Salida> {
  return this.http.put<Salida>(
    `${this.urlEndPoint}/${salida.idSalida}`,
    salida,
    {
      headers: this.httpHeaders,
    }
  );
}

eliminarSalida(id: number): Observable<Salida> {
  return this.http.delete<Salida>(`${this.urlEndPoint}/${id}`, {
    headers: this.httpHeaders,
  });
}
}
