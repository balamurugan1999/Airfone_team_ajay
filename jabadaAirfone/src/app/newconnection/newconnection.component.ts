import { ConnectionPlan } from './NewConnectionPlan';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-newconnection',
  templateUrl: './newconnection.component.html',
  styleUrls: ['./newconnection.component.css']
})
export class NewconnectionComponent implements OnInit {

  url="http://127.0.0.1:9000";
  newconnectiondetail=false;
  pid;
  pname;
  ptype;
  prepaid=true;
  postpaid=false;
  broadband=false;
  newconnectionForm: any;
  planarray=new Array<ConnectionPlan>()
  constructor(private http: HttpClient) {
    this.newconnectionForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      address : new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
      aadhar: new FormControl(null, [Validators.required,Validators.pattern(/^[0-9]\d{11}$/)])
    });


   }

  ngOnInit(): void {
    this.getPlanDetails();
  }
  prepaidfunc(){
    this.prepaid=true;
    this.postpaid=false;
    this.broadband=false;
    this.newconnectiondetail=false;
  }

  postpaidfunc(){
    this.prepaid=false;
    this.postpaid=true;
    this.broadband=false;
    this.newconnectiondetail=false;
  }

  broadbandfunc(){
    this.prepaid=false;
    this.postpaid=false;
    this.broadband=true;
    this.newconnectiondetail=false;
  }
  loadnewconnection(plan_id,plan_type,plan_name){
    this.ptype=plan_type;
    this.pid=plan_id;
    this.pname=plan_name;
    console.log(this.ptype);
    this.prepaid=false;
    this.postpaid=false;
    this.broadband=false;
    this.newconnectiondetail=true;
  }

  
  onNewconnection(name,address,email_id,aadhar)
  {
    if ( this.newconnectionForm.valid){
      this.http.post(this.url+"/newConnection",{name:name,address:address,email_id:email_id,aadhar_num:aadhar,plan_id:this.pid,plan_type:this.ptype}).subscribe((data) => {
        console.log(data);
         alert("User Updated,Please check your Mail for further Details....")
         location.reload();   
  
        }); 
    }
    else{
      alert(' Please Enter all fields');
    }

  }



  getPlanDetails(){
    this.http
    .get<ConnectionPlan[]>(this.url+"/getPlanDetails")
    .subscribe(response=>{
      console.log(response);
      this.planarray = response["Plan_details"].map(item => {
        return new ConnectionPlan(
          item.plan_id, 
          item.plan_name, 
          item.validity,
          item.rate,
          item.data,
          item.talktime, 
          item.sms,
          item.speed,
          item.plan_type, 
          item.plan_benefit
        );
      });
    });
  }

}
