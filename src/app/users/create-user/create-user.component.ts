import { Component, OnInit } from '@angular/core';
import { RequestCreate } from '../user.model';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  request: RequestCreate = {
    id: 0,
    email: '',
    first_name: '',
    last_name: ''
  }

  constructor() { }

  ngOnInit() {
  }

}
