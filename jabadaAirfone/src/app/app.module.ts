import { RaisedticketsComponent } from './user-ui/raisedtickets/raisedtickets.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TariffComponent } from './tariff/tariff.component';
import { NewconnectionComponent } from './newconnection/newconnection.component';
import { ServicesComponent } from './services/services.component';
import { UserUIComponent } from './user-ui/user-ui.component';
import { AdminUIComponent } from './admin-ui/admin-ui.component';
import { PostpaidComponent } from './user-ui/postpaid/postpaid.component';
import { PrepaidComponent } from './user-ui/prepaid/prepaid.component';
import { BroadbandComponent } from './user-ui/broadband/broadband.component';
import { UserQueriesComponent } from './user-ui/user-queries/user-queries.component';
import { PlanComponent } from './admin-ui/plan/plan.component';
import { AdminQueriesComponent } from './admin-ui/admin-queries/admin-queries.component';
import { HistoryComponent } from './admin-ui/history/history.component';
import { UsercontrolComponent } from './admin-ui/usercontrol/usercontrol.component';
import { MainmenubarComponent } from './mainmenubar/mainmenubar.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AdminNavComponent } from './admin-ui/admin-nav/admin-nav.component';
import { FaqComponent } from './faq/faq.component';
import { HttpClientModule } from '@angular/common/http';
import { UsermenuComponent } from './user-ui/usermenu/usermenu.component';
import {LoginserviceService} from './loginservice'





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    TariffComponent,
    NewconnectionComponent,
    ServicesComponent,
    UserUIComponent,
    AdminUIComponent,
    PostpaidComponent,
    PrepaidComponent,
    BroadbandComponent,
    UserQueriesComponent,
    PlanComponent,
    AdminQueriesComponent,
    HistoryComponent,
    UsercontrolComponent,
    MainmenubarComponent,
    PagenotfoundComponent,
    AdminNavComponent,
    FaqComponent,
    UsermenuComponent,
    RaisedticketsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule,HttpClientModule
  ],
  providers: [LoginserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

