import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import{AlertsService} from './alert-service/alerts.service';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserComponent } from './user/user.component';
import { HttpClient } from 'selenium-webdriver/http';
import { StrikethroughDirective } from './strikethrough.directive';
import { AboutComponent } from './about/about.component';
import {RouterModule, Routes} from '@angular/router';
const routes:Routes=[
  {path:"users",component:UserComponent},
  {path:"about",component:AboutComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    UserComponent,
    StrikethroughDirective,
    AboutComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
    
  ],
  providers: [AlertsService],//add service to providers
  bootstrap: [AppComponent]
})
export class AppModule { }
