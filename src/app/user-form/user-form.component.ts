import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  userForm:any;
  address:any;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.userForm=this.fb.group({
      userName:['',Validators.required],
      userEmail:['',Validators.required],
      userMob:['',Validators.required],
      address:this.fb.group({ userStreet:['',Validators.required],
      userState:['',Validators.required],
      userPostal:['',Validators.required]})



    })
  }

  get userName()
  {
    return this.userForm.get('userName')
  }
   get emailName()
   {
    return this.userForm.get('userEmail')
   }

  onSubmit()
  {
    // console.log(this.userForm.value)
    // console.log("Getting adress data")
    // console.log(this.userForm.value.address)
    console.log(this.userName.value)
    console.log(this.emailName.value)
  }

  onReset()
  {
    this.userForm.reset();
  }

  onSet()
  {
    console.log(this.userForm.controls.userName.setValue("Siddhesh"))
  }
}
