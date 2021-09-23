import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  countValue=5;

  message="hello"

  constructor() { }

  ngOnInit(): void {
  }

  // getIncrement()
  // {
  //   this.countValue++
  //   console.log(this.countValue)
  // }

  // getDecrement()
  // {
  //   this.countValue--
  //   console.log(this.countValue)
  // }

  changeHandler(count: number)
  {
    this.countValue=count
    console.log(count)
  }

}
