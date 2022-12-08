import { Component, OnInit } from '@angular/core';
import { RequestCreate, ResponseCreate, ResponseUser } from './user.model';
import { UsersService } from './user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  request: RequestCreate = {
    id: 0,
    email: '',
    first_name: '',
    last_name: ''
  }

  displayResponsive!: boolean;

  showResponsiveDialog() {
    this.displayResponsive = true;
  }

  display: boolean = false;

  showDialog() {
    this.display = true;
  }

  response!: ResponseCreate;

  responseUsers!: ResponseUser;

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe(res => {
        this.responseUsers = res;
      })

  }

  save() {
    this.userService.createUser(this.request).subscribe(res => {
      this.response = res;
    });
  }

}

console.log(Response)
