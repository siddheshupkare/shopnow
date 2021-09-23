import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnChanges {
  @Input() myCount!:number;
  @Input() message!: string;
  //myCount =0;
  // @Output() myCountChanged: EventEmitter<number>= new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    console.log("Hello WOrld")
  }

  ngOnChanges()
  {
    console.log("Changes Done")
  }

  getIncrement()
  {
    this.myCount++
    // this.myCountChanged.emit(this.myCount)
  }

  getDecrement()
  {
    this.myCount--
    // this.myCountChanged.emit(this.myCount)
  }

}
