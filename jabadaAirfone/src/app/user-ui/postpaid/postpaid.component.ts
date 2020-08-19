import { userdetails } from './../broadband/userdetails';
import { getuserusage } from './../prepaid/getuserusage';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import{outstandingamount} from './../postpaid/outstandingamount';
import { useroffer } from '../broadband/useroffer';
import { LoginserviceService } from 'src/app/loginservice';



@Component({
  selector: 'app-postpaid',
  templateUrl: './postpaid.component.html',
  styleUrls: ['./postpaid.component.css']
})
export class PostpaidComponent implements OnInit {
  mobile_number: string;
  loadedPosts=new Array<getuserusage>()
  loadedPostsamount=new Array<outstandingamount>()
  loadedPostsgreet=new Array<userdetails>()
  loadedPostsoffer=new Array<useroffer>()
  


 
  mb;
  data;
  Phonedata;
  Statusdata: any;

  constructor(private http:HttpClient,private myService: LoginserviceService) {
    this.data=new Array<any>();
    this.mb=this.myService.myFun();
    this.myService.myPhoneMethod$.subscribe((data1) => {
      this.Phonedata = data1; // And he have data here too!
      console.log(this.Phonedata);
      alert(data1);
  }
);
this.myService.myStatusMethod$.subscribe((data1) => {
  this.Statusdata = data1; // And he have data here too!
  console.log(data1);
}
);
   }

  ngOnInit(): void {
    this.getuserusage(),
    this.outstandingamount(),
    this.greeting();
  }
  getuserusage(){
    this.http
    .get<getuserusage[]>("http://127.0.0.1:9000/userUsage/"+this.mb)
    .subscribe(response=>{
      this.loadedPosts = response["UserUsage"].map(item => {
        return new getuserusage(
          item.sms,
          item.talktime,
          item.data
        );
      });
    });
    
  }

  outstandingamount(){
    this.http
    .get<outstandingamount[]>("http://127.0.0.1:9000/outStandingAmount/"+this.mb)
    .subscribe(response=>{
      this.loadedPostsamount = response["OutStandingAmount"].map(item => {
        return new outstandingamount(
          item.bill_no,
          item.bill_amount
          
        );
      });
    });
    
  }
  /* payment status update after click paybill */
  paymentupdate(bill_no:string){
    let url="http://127.0.0.1:9000/updatePayStatus"
    this.http.post(url,{bill_no:bill_no}).toPromise().then((data:any)=>{console.log(data);})
  }

  greeting(){
    this.http
    .get<userdetails[]>("http://127.0.0.1:9000/userDetails/"+this.mb)
    .subscribe(response=>{
      this.loadedPostsgreet = response["UserDetails"].map(item => {console.log(this.loadedPosts)
        return new userdetails(
          item.name,
          item.mobile_number,
          item.address
          
        );
      });
    });
  }
  
getoffer(){
  this.http
  .get<useroffer[]>("http://127.0.0.1:9000/userOffer/"+this.mb)
  .subscribe(response=>{
    this.loadedPostsoffer = response["UserOffer"].map(item => {console.log(this.loadedPosts)
      return new useroffer(
        item.plan_name,
        item.validity,
        item.rate,
        item.data,
        item.talktime,
        item.sms,
        item.speed,
        item.plan_benefit


        
      );
    });
  });

}
userwindowhistory(fromdate:string,todate:string){
  let url="http://127.0.0.1:9000/getUserPlanHistory/"+fromdate+"/"+todate+"/"+this.mb
  this.http.post(url,null).toPromise().then((data:any)=>{console.log(data);})
  alert("Email sent to registered Mail")
}
}
