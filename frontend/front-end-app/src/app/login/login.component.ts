import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
msg:string="";
  loginRef=new FormGroup({
    emaild:new FormControl(),
    password:new FormControl(),
    typeofuser:new FormControl()
  })

  constructor(public ls:LoginService,public router:Router){}  // DI for LoginService 

  signIn():void{

    let login=this.loginRef.value;

    this.ls.signIn(login).subscribe({
      next:(result:any)=>{

      },
    error:(error:any)=> {
      console.log(error)
    },
    complete:()=>{
      console.log("SignIn done!")
    } 
    })
    this.loginRef.reset();
  }


}
