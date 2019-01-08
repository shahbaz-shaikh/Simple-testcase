import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public users: any[];

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.getUsers();
  }

  public getUsers(): void {
    this.usersService.getUsers().subscribe(res => {
      this.users = res;
      console.log(this.users);
    });
  }

}
