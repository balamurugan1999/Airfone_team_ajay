import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-ui',
  templateUrl: './admin-ui.component.html',
  styleUrls: ['./admin-ui.component.css']
})
export class AdminUIComponent implements OnInit {
loginForm;
  constructor(private router:Router) { 
    this.loginForm = new FormGroup({
      email : new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required])
    });
  }
  onLogin(id:string,pwd:string): void{
    if (this.loginForm.valid && id=="admin@airfone.com" && pwd=="admin"){
      this.router.navigate(['/Admin-home']);
    }
    else {
      alert("Enter a valid response");
    }
   
}
  ngOnInit(): void {
  }

}
