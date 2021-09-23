import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {
  @Input() mobName!:string;
  show!:boolean;
  prodDetails:any;
  constructor(private productsService: ProductsService, private http: HttpClient,private activatedroute: ActivatedRoute) { }
id:any
  ngOnInit(): void {
    this.activatedroute.params.subscribe(params=>{
      this.id =params['id']
     
     
    })
    this.getGameData(this.id)
  }

  getList()
  {
    this.show=false;
    console.log(this.show)
    this.productsService.getData().subscribe(mydata=>
      {
        this.prodDetails=mydata
      })
  }


  getGameData(id: any)
  {
    this.http.get("http://localhost:3000/games/"+id).subscribe((data)=>
    {
      console.log(data)
    })
  }

}
