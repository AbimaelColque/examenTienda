import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  private base = environment.apiUrl;
  private apiUrl = `${environment.apiUrl}/categorias`;

  constructor(private http:HttpClient){

  }

  listarCategorias(){
    return this.http.get<any[]>(`${this.base}/marcas`);
  }

  crearCategoria(categoria: any): Observable<any> {
    return this.http.post(`${this.base}/marcas`, categoria);
  }

  actualizarCategoria(id: number, categoria: any) {
    return this.http.put(`${this.base}/marcas/${id}`, categoria);
  }

  eliminarCategoria(id: number): Observable<any> {
    return this.http.delete(`${this.base}/marcas/${id}`);
  }
}
