import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user';
@Component({
  selector: 'ns-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  moduleId: module.id,
})
export class UserComponent implements OnInit {
users: Array<User>
  constructor(private userservice: UserService) { }

  ngOnInit() {
      this.users = this.userservice.getUsers()
  }

}
