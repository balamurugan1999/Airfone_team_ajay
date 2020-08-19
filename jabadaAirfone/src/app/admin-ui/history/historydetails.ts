export class HistoryDetails{
    bill_no:string;
    bill_amount:string;
    cycle_date:string;
    paid_status:string;
    billdue_date:string;
    name:string;
    customer_id:string;

    
    constructor(...args: any[])
    {
        this.bill_amount=args[0]
        this.bill_no=args[1],
        this.billdue_date=args[2],
        this.customer_id=args[3],
        this.cycle_date=args[4],
        this.name=args[5],
        this.paid_status=args[6]

    
    }
  
  }