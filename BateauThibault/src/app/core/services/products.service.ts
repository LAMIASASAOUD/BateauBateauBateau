import { Injectable } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http : HttpClient) { }


  getProductsFromJson()
  {
   // return this.http.get<Product[]>("../assets/data/products.json");

   return this.http.get<Product[]>("http://127.0.0.1:8000/infoproducts/");
  }
}
