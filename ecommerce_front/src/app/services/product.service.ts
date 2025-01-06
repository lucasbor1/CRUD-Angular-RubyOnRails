import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly baseUrl = 'http://localhost:3000/products'; // URL do backend Rails

  constructor(private readonly http: HttpClient) {}

  // Obter todos os produtos
  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  // Obter um produto por ID
  getProduct(productId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${productId}`);
  }

  // Criar um novo produto
  createProduct(payload: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, payload);
  }

  // Atualizar um produto existente
  updateProduct(productId: number, payload: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${productId}`, payload);
  }

  // Excluir um produto
  deleteProduct(productId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${productId}`);
  }
}
