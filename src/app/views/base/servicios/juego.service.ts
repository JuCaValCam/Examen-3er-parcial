import { Injectable } from '@angular/core';
import  { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JuegoModel } from '../model/juego.model';
@Injectable({
  providedIn: 'root'
})
export class JuegoService {
  private apiURL ='http://localhost:8000/ruta-juego/'
  constructor(private http: HttpClient) { }
  
  getTodosJuegos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiURL);
  }

  getOrdenarJuegosPorPrecioas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiURL+'ordenar-juego');
  }

//  getRango200-500(): Observable(any[]>{
//    return this.http.get<any[]>(this.apiURL+'rangop-juego');
//}


// ------------------METODO CRUD
agregarJuego(juego: JuegoModel): Observable<JuegoModel> {
  console.log(juego);
  // return this.http.post<JuegoModel>(`${this.apiURL}/agregar`,juego);
  return this.http.post<JuegoModel>(this.apiURL+'/agregar',juego);
  }
  editarJuego(id: string, juego: JuegoModel): Observable<JuegoModel> {
    return this.http.put<JuegoModel>(`${this.apiURL}/editar/${id}`,juego);
  }

  eliminarJuego(id: string): Observable<JuegoModel> {
    console.log(id);
    console.log(`${this.apiURL}/eliminar/${id}`);

    return this.http.delete<JuegoModel>(`${this.apiURL}/eliminar/${id}`);
  }
}

