import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  regForm!: FormGroup


  constructor() { }

  ngOnInit(): void {
    this.regForm=new FormGroup({
      'regName': new FormControl('',
      [Validators.required, Validators.minLength(4)]),
      'regEmail': new FormControl('',
      [Validators.required,Validators.email])
    })
  }

  onSubmit()
  {
      console.log("Hello world")
      console.log(this.regForm.value)
      console.log(this.regForm.value.regName)

  }

}
