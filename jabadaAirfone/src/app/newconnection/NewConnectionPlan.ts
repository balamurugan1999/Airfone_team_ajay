export class ConnectionPlan{
   
  plan_id:string;  
  plan_name:string; 
  validity:string; 
  rate:string; 
  data:string; 
  talktime:string; 
  sms:string; 
  speed:string; 
  plan_type:string; 
  plan_benefit:string;
    
    constructor(plan_id,plan_name,validity,rate,data,talktime,sms,speed,plan_type,plan_benefit)
    {
      this.plan_id=plan_id;
      this.plan_name=plan_name;
      this.validity=validity;
      this.rate=rate;
      this.data=data;
      this.talktime=talktime;
      this.sms=sms;
      this.speed=speed;
      this.plan_type=plan_type;
      this.data=data;
      this.plan_benefit=plan_benefit;
      
    }
  
  }