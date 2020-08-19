import { ServicesComponent } from './services/services.component';
import { FaqComponent } from './faq/faq.component';
import { UserUIComponent } from './user-ui/user-ui.component';
import { HomeComponent } from './home/home.component';
import { TariffComponent } from './tariff/tariff.component';
import { NewconnectionComponent } from './newconnection/newconnection.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminUIComponent } from './admin-ui/admin-ui.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PlanComponent } from './admin-ui/plan/plan.component';
import { AdminQueriesComponent } from './admin-ui/admin-queries/admin-queries.component';
import { HistoryComponent } from './admin-ui/history/history.component';
import { UsercontrolComponent } from './admin-ui/usercontrol/usercontrol.component';
import { PrepaidComponent } from './user-ui/prepaid/prepaid.component';
import { BroadbandComponent } from './user-ui/broadband/broadband.component';
import { UserQueriesComponent } from './user-ui/user-queries/user-queries.component';
import { RaisedticketsComponent } from './user-ui/raisedtickets/raisedtickets.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'newconnection',component:NewconnectionComponent},
  {path:'tariff',component:TariffComponent},
  {path:'aboutus',component:ServicesComponent},
  {path:'login',component:LoginComponent},
  {path:'help',component:FaqComponent},
  {path:'userloginsucess',component:UserUIComponent},
  {path:'admin',component:AdminUIComponent},
  {path:'Admin-home',component:PlanComponent},
  {path:'Admin-Create-Edit-plans',component:PlanComponent},
  {path:'Admin-Query-Response',component:AdminQueriesComponent},
  {path:'Admin-User-History',component:HistoryComponent},
  {path:'Admin-User-Control',component:UsercontrolComponent},  
  {path:'',component:UserUIComponent},
  {path:'prepaid',component:PrepaidComponent},
  {path:'postpaid',component:PrepaidComponent},
  {path: 'broadband',component:BroadbandComponent},
  {path:'createqueries',component:UserQueriesComponent},
  {path:'raisedtickets',component:RaisedticketsComponent},
  {path:'**',component:PagenotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
