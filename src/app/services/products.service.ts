import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Products } from '../models/products.models';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {          //this class is called as Service Class
  // products: Products[]=[];
  constructor(private http: HttpClient){}

  getData()
  {
    return this.http.get<Products[]>("https://fakestoreapi.com/products")
  }

}
