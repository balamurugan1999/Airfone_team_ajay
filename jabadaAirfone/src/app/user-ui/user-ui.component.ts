import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import{getplantype} from './getplantype';
import { tariff } from '../tariff/tariff';
import { LoginserviceService } from '../loginservice' ;


@Component({
  selector: 'app-user-ui',
  templateUrl: './user-ui.component.html',
  styleUrls: ['./user-ui.component.css']
})
export class UserUIComponent implements OnInit {
  public Phonedata:any;
  public Statusdata:any;
  mobile_number: string;
  result: string;
  loadedPosts=new Array<getplantype>()
  loadedPoststraiff=new Array<tariff>()
  data: any[];
  changeplan;
  mobile:string;
  mb;

  constructor(private http:HttpClient,private myService: LoginserviceService) {
    this.data=new Array<any>();
    this.mb=this.myService.myFun();
    this.myService.myPhoneMethod$.subscribe((data1) => {
      this.Phonedata = data1; // And he have data here too!

  }
);
this.myService.myStatusMethod$.subscribe((data1) => {
  this.Statusdata = data1; // And he have data here too!
  console.log(data1);
}
);
   }

  ngOnInit(): void {
    this.getplantype();
    console.log(this.Phonedata);
    this.plantariffchange();
   
  }
  prepaidfun():void{}

/* DISPLAY TRAIFF FOR USER TO CHANGE RESPECTIVE USER*/

   plantariffchange(){
    this.http
    .get<tariff[]>("http://127.0.0.1:9000/getPlanDetails")
    .subscribe(response=>{
      this.loadedPoststraiff = response["Plan_details"].map(item => {
        return new tariff(
          item.plan_id,
          item.plan_name,
          item.validity,
          item.rate,
          item.data,
          item.talktime,
          item.sms,
          item.speed,
          item.plan_type,
          item.plan_benefit,

        );
      });
    });
  }
  /* TO CHECK USER FOR PRE,POST,BROAD */


  MobileNum;
  userStatus;


  getplantype(){
    console.log()
    this.http
    .get<getplantype[]>("http://127.0.0.1:9000/planType/"+this.mb)
    .subscribe(response=>{
      this.loadedPosts = response["PlantType"].map(item => {console.log(this.loadedPosts)
        return new getplantype(
          item.plan_type
          
        );
      });
    });
}

/* CAPTURE NAV BAR ACTION */

changeplanfunc(){
  this.changeplan=true;
}

/* update user plan */
updateuserplan(plan_id:string,plan_type:string,mobile_number:string){
  let url="http://127.0.0.1:9000/changePlan"
  this.http.post(url,{plan_id:plan_id,plan_type:plan_type,mobile_number:this.mb}).toPromise().then((data:any)=>{console.log(data);})
  alert('Your plan has been changed!!!!!!')
}

}
