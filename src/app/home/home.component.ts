import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  sampleData: any;

  constructor(private http: HttpClient, private activatedroute: ActivatedRoute) { }
  id:any
  ngOnInit(): void {
    // this.getData()

    this.getBackendData()

  }

  getData()
  {
    this.http.get("https://fakestoreapi.com/products").subscribe((data)=>{console.log(data)})
  }

  getBackendData()
  {
    this.http.get("http://localhost:3000/games").subscribe((data)=>{
          this.sampleData=data
          console.log(this.sampleData)
    })
  }

}
