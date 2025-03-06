import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IProducto } from '../interfaces/iproducto';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  private apiUrl = 'https://peticiones.online/api/products'
  private products: IProducto[] = [];

  constructor(private http: HttpClient) { }

  getAll(): Observable<IProducto[]> {
    return this.http.get<{results: IProducto[]}>(this.apiUrl).pipe(
      map(response => response.results || [])
    );
  }
  
  getById(_id: string): Observable<IProducto> {
    return this.http.get<IProducto>(`${this.apiUrl}/${_id}`);
  }


}
