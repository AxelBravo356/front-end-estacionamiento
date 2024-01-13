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

  recMotos(): Observable<Moto[]>{
    return this.http.get<Moto[]>(this.urlEndPoint)
    .pipe(map((response) => response as Moto[]));
  }
}
