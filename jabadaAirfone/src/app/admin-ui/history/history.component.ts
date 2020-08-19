import { HistoryDetails } from './historydetails';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
history;
setmargin=180;
getHistoryArray=new Array<HistoryDetails>()
url="http://127.0.0.1:9000/"
tableview=false;
  constructor(private http: HttpClient) {
    this.history = new FormGroup({
      phoneNum : new FormControl(null, [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)])
    });

   }

  ngOnInit(): void {
  }
  gethistory(mobile_number:string) {
    
    
    if ( this.history.valid){
      this.tableview=true;
      this.setmargin=0;
      this.http
      .get<HistoryDetails[]>(this.url+"AdminHistory/"+mobile_number)
      .subscribe(response=>{
        console.log(response["AdminHistory"]);
        this.getHistoryArray = response["AdminHistory"].map(item => {
          return new HistoryDetails(
            item.bill_amount,
            item.bill_no,
            item.billdue_date,
            item.customer_id,
            item.cycle_date,
            item.name,
            item.paid_status
           
          );
        });
      });






    }
    else{
      alert('Enter a Valid Number');
    }
  }

}
