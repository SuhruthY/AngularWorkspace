import { Component } from '@angular/core';
import { User } from "./user";
import { UserService } from './user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  users: User[]=[];
  constructor(private userService: UserService) {}

  ngOnInit() {}

  onGetNames(){
    this.userService.getUsers().subscribe(data => {
      for (let i=0;i<data.data.length;i++) {
        this.users[i]= new User(
          data.data[i].id, 
          data.data[i].first_name, 
          data.data[i].last_name, 
          data.data[i].email, 
          data.data[i].avatar
        ); 
      }
    });
  }
}
