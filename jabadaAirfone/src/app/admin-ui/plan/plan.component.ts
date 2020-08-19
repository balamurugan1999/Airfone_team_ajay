import { PlanName } from './planname';
import { Component, OnInit } from '@angular/core';
import {  HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {
  url="http://127.0.0.1:9000"
  newplan=true;
  editplan=false;
  PlanNameArray=new Array<PlanName>()
  constructor(private http: HttpClient) {
    

  }
  ngOnInit(): void {
  
  }
  newplanfunc(){
    this.newplan=true;
    this.editplan=false;
   
  }

  editplanfunc(){
    this.newplan=false;
    this.editplan=true;
    this.http
    .get<PlanName[]>(this.url+"/EditPlan")
    .subscribe(response=>{
      
      this.PlanNameArray = response["plan_name"].map(item => {
        return new PlanName(
          item.plan_name
        );
      });
    });
   
}
createPlanOperation(name,validity,rate,data,talktime,sms,speed,plan_type,plan_benefit,){
  

  this.http.post(this.url+"/CreatePlan",{plan_name:name,validity:validity,rate:rate,data:data,talktime:talktime,sms:sms,speed:speed,plan_type:plan_type,plan_benefit:plan_benefit}).subscribe((data) => {
      console.log(data);
       alert("Created New Plan");
       location.reload();   
      }); 
  }

  editPlanOperation(name,validity,rate,data,talktime,sms,speed,plan_type,plan_benefit,){
    
    this.http.post(this.url+"/EditPlan",{plan_name:name,validity:validity,rate:rate,data:data,talktime:talktime,sms:sms,speed:speed,plan_type:plan_type,plan_benefit:plan_benefit}).subscribe((data) => {
      console.log(data);
       alert("Plan Editted");
       location.reload();   
      }); 
  }




}