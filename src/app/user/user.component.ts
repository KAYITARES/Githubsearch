import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import {UserService} from '../users/user.service';
import {AlertsService} from '../alert-service/alerts.service';
import {Repository} from '../repository-class/repository';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  providers:[UserService],//add the providers to the component
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 // users = [
    //new User(""),
  //]
  //addNewUser(user){
    //this.users.push(user)
  //}
  repository:Repository;
  users:any;
  alertService:AlertsService;
  
  constructor(userService:UserService, alertService:AlertsService, private http:HttpClient) {
    this.users = userService.getUsers();
    this.alertService=alertService;//make service available to the class
   }

  ngOnInit() {
    interface ApiResponse{
      name:string;
      description:string
    }
    this.http.get<ApiResponse>("https://api.github.com/users/KAYITARES?access_token=f637cd1f068024aadfcb41dde68b743bc37bc53f").subscribe(data=>{
      this.repository= new Repository(data.name,data.description)

    })

  }

}
