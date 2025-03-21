import { Injectable } from '@angular/core';
import { Aeropuerto } from '../models/aeropuerto.models';
import { environment } from '../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AeropuertosService {

  private apiUrl: string = environment.apiUrl +'aerolinea/';
  constructor(private http: HttpClient){ }
    getAerolineas():Observable<Aeropuerto[]>{
      return this.http.get<Aeropuerto[]>(this.apiUrl);

    }
    createAerolinea(aerolinea: Aeropuerto):Observable<Aeropuerto>{
      return this.http.post<Aeropuerto>(`${this.apiUrl}`,aerolinea);
    }

    
    updateAerolinea(aerolinea: Aeropuerto): Observable<Aeropuerto>{
      return this.http.put<Aeropuerto>(`${this.apiUrl}${aerolinea.id}`, aerolinea);
    }
    
    deleteAerolinea(idAerolinea: number):Observable<Aeropuerto>{
      return this.http.delete<Aeropuerto>(`${this.apiUrl}${idAerolinea}`);
    
    }

}
