import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  cliente = {
    id: 1,
    nome: "Pedro",
    email: "pedro@gmail.com",
    idade: 45
  }

}
