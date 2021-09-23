import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { FormService } from '../services/form.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  message:any;
  constructor(private formservice: FormService) { }

  ngOnInit(): void {
    console.log("Signup Loaded")

  }

  formSubmit(data: NgForm)
  {
    console.log("Hello")
    console.log(data.value)
    this.formservice.postData(data.value).subscribe(
      data=>console.log("success",data),
      err=>console.log("error",err)
      )
    // console.log(data.value.fname)
    // console.log(data.value.mobile)
    // console.log(data.value.password)
    // console.log(data.value.message)
  }


}
