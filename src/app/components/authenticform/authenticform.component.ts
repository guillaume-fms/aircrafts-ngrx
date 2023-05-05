import { Component } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-authenticform',
  templateUrl: './authenticform.component.html',
  styleUrls: ['./authenticform.component.css']
})
export class AuthenticformComponent {
  user = {} as User ;
  email: string = "";
  password: string = "";
  auth : boolean = false ;
  formBuilder: any;
  myForm: any;
}
