export class UserControlDetails{
    name:string;
    address:string;
    email_id:string;
    aadhar_num:string;
    
    constructor(...args: any[])
    {
      this.name=args[0];
      this.address=args[1];
      this.email_id=args[2];
      this.aadhar_num=args[3];

    }
  
  }