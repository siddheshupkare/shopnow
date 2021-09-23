import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products.models';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  show= false;
  productsdata:any;

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.getProducts();

  }


  getProducts()
  {
      this.productsService.getData().subscribe(mydata=>{
        this.productsdata=mydata;
        console.log(this.productsdata)

      })
  }

}

