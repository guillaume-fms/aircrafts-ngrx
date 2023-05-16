import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from 'src/app/model/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm!: FormGroup;
  user : User | undefined;
  error : string | undefined;
  connected : boolean = false;







  ngOnInit(): void {
  
}

onLogin(form : FormGroup): void {
  
}
  
}
