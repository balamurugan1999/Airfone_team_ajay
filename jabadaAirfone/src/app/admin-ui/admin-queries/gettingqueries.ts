export class QueryDetails{
  query_id:string;
  query:string;
  solution:string;
  // constructor(query_id,mobile_number,query){
  //   this.query=query;
  //   this.mobile_number=mobile_number;
  //   this.query_id=query_id;
  

  // }
  constructor(...args: any[])
  {
    this.query=args[1];
    this.query_id=args[0];
    if(args[2])
    this.solution=args[2];
  }

}