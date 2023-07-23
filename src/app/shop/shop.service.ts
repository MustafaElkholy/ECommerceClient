import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pagintation } from '../shared/models/paging';
import { Products } from '../shared/models/product';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  constructor(private http: HttpClient) {}
baseURL = "https://localhost:7052/api/"
  getProducts() {
    return this.http.get<Pagintation<Products[]>>(this.baseURL + "product")
  }
}
