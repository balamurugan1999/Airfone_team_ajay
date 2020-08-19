import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import{FormGroup} from '@angular/forms';
import {map} from 'rxjs/operators'
import{tariff} from './tariff';
/* interface tariff{
  "plan_id":string,
  "plan_name":string,
  "validity":string,
  "rate":string,
  "data":string,
  "talktime":string,
  "sms":string,
  "speed":string,
  "plan_type":string,
  "plan_benefit":string,
} */
@Component({
  selector: 'app-tariff',
  templateUrl: './tariff.component.html',
  styleUrls: ['./tariff.component.css']
})
export class TariffComponent implements OnInit {
  prepaid=true;
  postpaid;
  broadband;
  data:Array<any>;
  result: string;
  loadedPosts=new Array<tariff>()
  
  constructor(private http:HttpClient) {
    this.data=new Array<any>();
   }

  ngOnInit(): void {
    this.prepaid=true;
    this.getval();
  }
  /* private getval(){
    this.http
    .get<{[key:string]:tariff}>("http://127.0.0.1:9000/getPlanDetails")
    .pipe(
      map(responseData =>{
      const postsArray=[];
      for (const key in responseData){
        if(responseData.hasOwnProperty(key)){
        postsArray.push({ ...responseData[key]})
        // postsArray.push(responseData[key])
        }   
      }
      return postsArray;
    }))
    .subscribe(post=>{
      this.loadedPosts=post;
      // console.log(this.loadedPosts);
      
    });
  } */
  private getval(){
    this.http
    .get<tariff[]>("http://127.0.0.1:9000/getPlanDetails")
    .subscribe(response=>{
      this.loadedPosts = response["Plan_details"].map(item => {
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
  prepaidfun(){
    this.prepaid=true;
    this.postpaid=false;
    this.broadband=false;
    /* let url="http://127.0.0.1:9000/getPlanDetails"
    return this.http.get(url).subscribe((data:any)=>{this.result=JSON.stringify(data);console.log(this.result[0])})   */
    /* for(let i=1;i<=this.loadedPosts.length;i++){
      console.log(i)
    }  */ 
    console.log(this.loadedPosts)
    
  }
  postpaidfun(){
    this.prepaid=false;
    this.postpaid=true;
    this.broadband=false;
  }
  broadbandfun(){
    this.prepaid=false;
    this.postpaid=false;
    this.broadband=true;
  }

  
}
