export class useroffer{
    
    plan_name:string;
    validity:string;
    rate:string;
    data:string;
    talktime:string;
    sms:string;
    speed:string;
    plan_benefit:string;
    constructor(plan_name,validity,rate,data,talktime,sms,speed,plan_benefit){
      
      this.plan_name=plan_name;
      this.validity=validity;
      this.rate=rate;
      this.data=data;
      this.talktime=talktime;
      this.validity=validity;
      this.sms=sms;
      this.speed=speed;
      this.plan_benefit=plan_benefit;

    }}