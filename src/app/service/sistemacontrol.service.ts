import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SistemaControl } from '../modelo/SistemaControl';

@Injectable({
  providedIn: 'root'
})
export class SistemacontrolService {
  private urlEndPoint: string =
  'http://localhost:8081/api/sc';

private httpHeaders = new HttpHeaders({ ContentType: 'application/json' });

constructor(private http: HttpClient) { }

recuperarSistemasControl(): Observable<SistemaControl[]> {
  return this.http
    .get(this.urlEndPoint)
    .pipe(map((response) => response as SistemaControl[]));
}

recuperarSistemaControl(id: number): Observable<SistemaControl> {
  return this.http.get<SistemaControl>(`${this.urlEndPoint}/${id}`);
}

crearSistemaControl(sistemaControl: SistemaControl): Observable<SistemaControl> {
  return this.http.post<SistemaControl>(this.urlEndPoint, sistemaControl, {
    headers: this.httpHeaders,
  });
}

actualizarSistemaControl(sistemaControl: SistemaControl): Observable<SistemaControl> {
  return this.http.put<SistemaControl>(
    `${this.urlEndPoint}/${sistemaControl.idSistemaControl}`,
    sistemaControl,
    {
      headers: this.httpHeaders,
    }
  );
}

eliminarSistemaControl(id: number): Observable<SistemaControl> {
  return this.http.delete<SistemaControl>(`${this.urlEndPoint}/${id}`, {
    headers: this.httpHeaders,
  });
}

}
