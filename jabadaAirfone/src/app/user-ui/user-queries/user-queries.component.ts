import { FormsModule, FormControl,FormControlName} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, NgModule } from '@angular/core';
import { LoginserviceService } from 'src/app/loginservice';

@Component({
  selector: 'app-user-queries',
  templateUrl: './user-queries.component.html',
  styleUrls: ['./user-queries.component.css']
})
export class UserQueriesComponent implements OnInit {
  
  query:string;
  mobile_number: any;
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
  }
  Insertquery(){
    
    let url="http://127.0.0.1:9000/insertQuery"
    this.http.post(url,{mobile_number:this.mb,query:this.query,}).toPromise().then((data:any)=>{console.log(data);})
    alert('Your query has been successfully noted!!!!!')
  }

}
