import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  mobileNo;
  myPhoneMethod$: Observable<any>;
 myStatusMethod$: Observable<any>;

  private myPhoneMethodSubject = new Subject<any>();
  private myStatusMethodSubject = new Subject<any>();
  
  constructor() {
    this.myPhoneMethod$ = this.myPhoneMethodSubject.asObservable();
    this.myStatusMethod$ = this.myStatusMethodSubject.asObservable();
  }
  myPhoneMethod(data) {

    this.mobileNo=data;

    // I have data! Let's return it so subscribers can use it!
    // we can do stuff with data if we want
    this.myPhoneMethodSubject.next(data);
}
myStatusMethod(data) {
  console.log(data); // I have data! Let's return it so subscribers can use it!
  // we can do stuff with data if we want
  this.myStatusMethodSubject.next(data);
}
 myFun(){
   return this.mobileNo;
 }
}


