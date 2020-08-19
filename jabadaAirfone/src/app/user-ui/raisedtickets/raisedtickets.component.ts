import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import{raisedticket} from './raisedticket'
import { LoginserviceService } from 'src/app/loginservice';

@Component({
  selector: 'app-raisedtickets',
  templateUrl: './raisedtickets.component.html',
  styleUrls: ['./raisedtickets.component.css']
})
export class RaisedticketsComponent implements OnInit {
  loadedPosts=new Array<raisedticket>()
  mobile_number:string;
  result: string;
  query:string;
  mb;
  data;
  Phonedata;
  Statusdata: any;

  constructor(private http:HttpClient,private myService: LoginserviceService) {
    this.data=new Array<any>();
    this.mb=this.myService.myFun();
  
    this.myService.myPhoneMethod$.subscribe((data1) => {
      this.Phonedata = data1; // And he have data here too!
      
  }
);
this.myService.myStatusMethod$.subscribe((data1) => {
  this.Statusdata = data1; // And he have data here too!
  
}
);
   }

  ngOnInit(): void {
    this.getquery();
  }
   getquery(){
    this.http
    .get<raisedticket[]>("http://127.0.0.1:9000/getUserQuery/"+this.mb)
    .subscribe(response=>{
      this.loadedPosts = response["Query_details"].map(item => {
        return new raisedticket(
          item.query_id,
          item.query,
          item.solution,
          item.query_status,
        );
      });
    });
    
  }
  updatequery(query_id:string){
    
    let url="http://127.0.0.1:9000/updateUserQuery"
    this.http.put(url,{query_id:query_id}).toPromise().then((data:any)=>{console.log(data);})
    alert('Thank you!!')
    
  }
  nofunc(){
    alert('oops!! We will get back with good solution')
  }
  
 

}


