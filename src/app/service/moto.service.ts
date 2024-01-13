import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Moto } from '../modelo/Moto';

@Injectable({
  providedIn: 'root'
})
export class MotoService {
  private urlEndPoint: string =
  'http://localhost:8081/api/motos';

  private httpHeaders = new HttpHeaders({ ContentType: 'application/json' });

  constructor(private http: HttpClient) { }

  recuperarMotos(): Observable<Moto[]>{
    return this.http.get<Moto[]>(this.urlEndPoint)
    .pipe(map((response) => response as Moto[]));
  }

  recuperarMoto(id: number): Observable<Moto> {
    return this.http.get<Moto>(`${this.urlEndPoint}/${id}`);
  }

  crearMoto(moto: Moto): Observable<Moto> {
    return this.http.post<Moto>(this.urlEndPoint, moto, {
      headers: this.httpHeaders,
    });
  }

  actualizarMoto(moto: Moto): Observable<Moto> {
    return this.http.put<Moto>(
      `${this.urlEndPoint}/${moto.idMoto}`,
      moto,
      {
        headers: this.httpHeaders,
      }
    );
  }

  eliminarMoto(id: number): Observable<Moto> {
    return this.http.delete<Moto>(`${this.urlEndPoint}/${id}`, {
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
