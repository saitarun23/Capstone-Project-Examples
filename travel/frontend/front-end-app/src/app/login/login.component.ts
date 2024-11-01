import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';
import { Login } from '../login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginRef = new FormGroup({
    emailid:new FormControl(),
    password:new FormControl(),
    typeofuser:new FormControl()
  });
msg:string ="";
  constructor(public ls:LoginService,public router:Router){}     // DI for LoginService 
  signIn(): void {
    let login = this.loginRef.value;
    //console.log(login);
    this.ls.signIn(login).subscribe({
      next:(result:any)=> {
        //console.log(result)
        
        if(result=="Admin login successfully"){
            this.router.navigate(["admin"],{skipLocationChange:true})
        }else if(result=="Customer login successfully"){
          this.router.navigate(["customer"],{skipLocationChange:true})
        }else {
          this.msg=result;
        }
        
      },
      error:(error:any)=> {
          console.log(error)
      },  
      complete:()=> {
        console.log("SignIn done!")
      }
    })
    this.loginRef.reset();
  
}

}