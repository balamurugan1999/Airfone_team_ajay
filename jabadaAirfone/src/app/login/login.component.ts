import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { concat } from 'rxjs';
import { LoginserviceService } from '../loginservice' ;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
signUpForm: FormGroup;
loginForm: FormGroup;
mobile_number;
password;
mobile_Number;
Password;
email_id;
public Phonedata:any;
public  Statusdata:any;






  constructor(private router:Router, private http: HttpClient, private myService:  LoginserviceService) {
  
  }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      phoneNum : new FormControl(null, [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]),
      password: new FormControl(null, [Validators.required])
    });
     this.loginForm = new FormGroup({
      phoneNum : new FormControl(null, [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]),
      password: new FormControl(null, [Validators.required])
    });

  }
  onLogin(): void{
    
    let url ="http://127.0.0.1:9000/login";
    this.http.post(url,{mobile_number: this.mobile_number,password: this.password}).toPromise().then((data: any) =>
     {
       //console.log(data.login)
       if (data.login == "Success"){
       this.Phonedata = this.mobile_number;
       this.Statusdata = 1;
       this.myService.myPhoneMethod(this.Phonedata);
      // this.myService.myStatusMethod(this.Statusdata);
        alert('Login successfully !');
        this.router.navigate(['/userloginsucess'])
       }
       else if (data.login == "User not found"){
        alert('User not found');
        this.mobile_number = '';
        this.password = '';
       }
       else if (data.login == "Incorrect Password"){
        alert('Incorect password');
        this.mobile_number = '';
        this.password = '';
       }
      });

   
}
onSignUp(): void {
  let url ="http://127.0.0.1:9000/signup";
    this.http.post(url,{email_id: this.email_id,mobile_number: this.mobile_Number,password: this.Password}).toPromise().then((data: any) =>
     {
       //console.log(data.UserSignup)
       if (data.UserSignup == "success"){  
        alert('SignUp successfully !!!, You Login now');
        this.mobile_Number = '';
        this.Password = '';
        this.email_id = '';
       }
       else if (data.UserSignup == "Already Registered User"){
        alert('Already Registered User');
        this.mobile_Number = '';
        this.Password = '';
        this.email_id = '';
       }
       else if (data.UserSignup == "Join Airfone"){
        alert('Join Airfone');
         this.mobile_Number = '';
         this.Password = '';
         this.email_id = '';
       }
      });
}
}
//if ( this.signUpForm.valid){
// alert('Registered Successfully !');
//}
//else{
//alert(' noooo');
//}