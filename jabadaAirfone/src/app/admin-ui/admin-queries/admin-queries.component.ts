import { map } from 'rxjs/operators';
import { QueryDetails } from './gettingqueries';
import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';




@Component({
  selector: 'app-admin-queries',
  templateUrl: './admin-queries.component.html',
  styleUrls: ['./admin-queries.component.css']
})


export class AdminQueriesComponent implements OnInit {
  gettingUserQuery=new Array<QueryDetails>()
  gettingRaisedUserQuery=new Array<QueryDetails>()
  constructor(private http: HttpClient) { }
  solution:string;
  query_id;
  newquery=true;
  raisedquery=false;
  answer=false;
  url="http://127.0.0.1:9000"
  

  ngOnInit(): void {
    this.getUserQuery();
    this.getRaisedUserQuery();
   
  }

  
  newqueryfunc(){
    this.newquery=true;
    this.raisedquery=false;
   
  }

  raisedqueryfunc(){
    this.newquery=false;
    this.raisedquery=true;
    
  }
  answerfunc(){
    this.answer=true;
  }

  
  sumbitAdminSolution(sol:string,id:string)
  {
    
    this.http.post(this.url+"/NewQuery",{query_id:id,solution:sol}).subscribe((data) => {
      console.log(data);
       alert("Solution Updated")
       location.reload();   

      }); 

  }

  sumbitAdminRaisedSolution(sol:string,id:string)
  {
    
    this.http.post(this.url+"/RaisedQuery",{query_id:id,solution:sol}).subscribe((data) => {
      console.log(data);
       alert("Solution  Updated")
       location.reload();   

      }); 

  }



  private getUserQuery(){
    
    this.http
    .get<QueryDetails[]>(this.url+"/NewQuery")
    .subscribe(response=>{
      
      this.gettingUserQuery = response["UserQuery"].map(item => {
        return new QueryDetails(
          item.query_id,
          item.query
        );
      });
    });
  }

  private getRaisedUserQuery(){
    
    this.http
    .get<QueryDetails[]>(this.url+"/RaisedQuery")
    .subscribe(response=>{
      
      this.gettingRaisedUserQuery = response["RaisedQuery"].map(item => {
        
       
        return new QueryDetails(
          item.query_id,
          item.query,
          item.solution
        
        );
      });
    });
  }




}