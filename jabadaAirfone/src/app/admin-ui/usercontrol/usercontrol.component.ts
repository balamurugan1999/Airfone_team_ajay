import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {UserControlDetails} from './usercontroldetails'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-usercontrol',
  templateUrl: './usercontrol.component.html',
  styleUrls: ['./usercontrol.component.css']
})
export class UsercontrolComponent implements OnInit {
  url="http://127.0.0.1:9000/";
  usercontrolarray=new Array<UserControlDetails>()
  blockuserForm: FormGroup;
  activateuserForm: FormGroup;
  deactivateuserForm: FormGroup;

  activemobilenumber;
  deactivemobilenumber;
  blockmobilenumber;

  // initialy setting the margin to 60
  setblockmargin=60;
  setactivatemargin=60;
  setdeactivatemargin=60;

  // initially making blockuser as first view
  blockuser=true;
  activateuser=false;
  deactivateuser=false;
  generatebill=false;
  remindermail=false;

  // initially disabling the userdetails after inputting the number
  deactivateUserdetail=false;
  activateUserdetail=false;
  blockUserdetail=false;
 
 
  constructor(private http: HttpClient) {
    this.blockuserForm = new FormGroup({
      phoneNum : new FormControl(null, [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)])
    });
    this.activateuserForm = new FormGroup({
      phoneNum : new FormControl(null, [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)])
    });
    this.deactivateuserForm = new FormGroup({
      phoneNum : new FormControl(null, [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)])
    });
   }

  ngOnInit(): void {
  }

// func is called when the  block user sidenav is clicked
  blockmenufunc(){
    this.setblockmargin=60;
    this.blockuser=true;
  this.activateuser=false;
  this.deactivateuser=false;
  this.generatebill=false;
  this.remindermail=false;
 
  this.deactivateUserdetail=false;
  this.activateUserdetail=false;
  
  }

  // func is called when the activate usersidenav is clicked
  activatemenufunc(){
    this.setactivatemargin=60;
    this.blockuser=false;
  this.activateuser=true;
  this.deactivateuser=false;
  this.generatebill=false;
  this.remindermail=false;
  this.activateUserdetail=false;
  this.deactivateUserdetail=false;
  this.blockUserdetail=false;

  }

   // func is called when the deactivate usersidenav is clicked
  deactivatemenufunc(){
    this.setdeactivatemargin=60;
    this.blockuser=false;
  this.activateuser=false;
  this.deactivateuser=true;
  this.generatebill=false;
  this.remindermail=false;
  this.activateUserdetail=false;
  this.blockUserdetail=false;
  this.deactivateUserdetail=false;
  
  }


  generatebillmenufunc(){
    this.setdeactivatemargin=60;
    this.blockuser=false;
  this.activateuser=false;
  this.remindermail=false;
  this.deactivateuser=false;
  this.generatebill=true;
  this.activateUserdetail=false;
  this.blockUserdetail=false;
  this.deactivateUserdetail=false;
  
  }


   remindermailmenufunc(){
    this.setdeactivatemargin=60;
    this.blockuser=false;
  this.activateuser=false;
  this.deactivateuser=false;
  this.generatebill=false;
  this.remindermail=true;
  this.activateUserdetail=false;
  this.blockUserdetail=false;
  this.deactivateUserdetail=false;
  
  }

  remindermailfunc(){

    this.http.post(this.url+"billReminder",{}).subscribe((data) => {
      console.log(data);
       alert("Bill Reminder has been sent to users for payment of bill");
       location.reload();   
      }); 
  }

  generatebillfunc(){

    this.http.post(this.url+"billGenerate",{}).subscribe((data) => {
      console.log(data);
       alert("Bill Generated for Current Cycle And sent to respective Mails");
       location.reload();   
      }); 
  }



  //func is called when the block user mobile number is typed for validation 
  blockuserfunc(mobile_no:string): void {
   
    
    if ( this.blockuserForm.valid){
      this.blockmobilenumber=mobile_no
      this.setblockmargin=0;
      this.blockUserdetail=true;
      this.deactivateUserdetail=false;
      this.activateUserdetail=false;
    
        
      this.http
    .get<UserControlDetails[]>(this.url+"UserControl/"+mobile_no)
    .subscribe(response=>{
      
      this.usercontrolarray = response["UserControlDetails"].map(item => {
        return new UserControlDetails(
          item.name,
          item.address,
          item.email_id,
          item.aadhar_num
        
        );
      });
    });



    }
    else{
      alert('Enter a Valid Number');
    }

  }

  //func is called when the activate  user mobile number is typed for validation 
  activateuserfunc(mobile_no:string): void {
    
    
    if ( this.activateuserForm.valid){
      this.activemobilenumber=mobile_no;
      this.setactivatemargin=0;
      this.blockUserdetail=false;
      this.deactivateUserdetail=false;
      this.activateUserdetail=true;
    


      this.http
    .get<UserControlDetails[]>(this.url+"UserControl/"+mobile_no)
    .subscribe(response=>{
      
      this.usercontrolarray = response["UserControlDetails"].map(item => {
        return new UserControlDetails(
          item.name,
          item.address,
          item.email_id,
          item.aadhar_num
        
        );
      });
    });




    }
    else{
      alert('Enter a Valid Number');
    }
  }

  //func is called when the deactivate  user mobile number is typed for validation 
  deactivateuserfunc(mobile_no:string): void {
    
    
    if ( this.deactivateuserForm.valid){
      this.deactivemobilenumber=mobile_no
      this.setdeactivatemargin=0;

      this.blockUserdetail=false;
      this.deactivateUserdetail=true;
      this.activateUserdetail=false;



      this.http
    .get<UserControlDetails[]>(this.url+"UserControl/"+mobile_no)
    .subscribe(response=>{
      
      this.usercontrolarray = response["UserControlDetails"].map(item => {
        return new UserControlDetails(
          item.name,
          item.address,
          item.email_id,
          item.aadhar_num
        
        );
      });
    });
    }
    else{
      alert('Enter a Valid Number');
    }
  }


  deactivateoperation(){
    this.http.post(this.url+"UserControl/"+this.deactivemobilenumber,{choice:0}).subscribe((data) => {
      console.log(data);
       alert("User Deactivated")
       location.reload();   
      }); 
  }
  activateoperation(){
    this.http.post(this.url+"UserControl/"+this.activemobilenumber,{choice:1}).subscribe((data) => {
      console.log(data);
       alert("User Activated")
       location.reload();   
      }); 
  }
  blockoperation(){
    this.http.post(this.url+"UserControl/"+this.blockmobilenumber,{choice:2}).subscribe((data) => {
      console.log(data);
       alert("User Blocked")
       location.reload();   
      }); 
  }



}
