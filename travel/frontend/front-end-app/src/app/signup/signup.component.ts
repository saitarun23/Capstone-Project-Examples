import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  loginRef=new FormGroup({
    emailid:new FormControl(),
    password:new FormControl(),
    typeofuser:new FormControl()
  });

  msg:string="";

  constructor(public ls:LoginService){}       // DI for LoginService

  signUp():void{
    let login=this.loginRef.value;

    this.ls.signUp(login).subscribe({
      next:(result:any)=>{
        this.msg=result;
      },
      error:(error:any)=>{
        console.log(error)
      },
      complete:()=>{
        console.log("SignUp done!")
      }
    })
    console.log(login);

    this.loginRef.reset();
  }
}
