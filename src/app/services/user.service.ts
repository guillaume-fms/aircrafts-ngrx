import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  auth: boolean = false;
  isUser : boolean = false;
  
  users: User[] = [
    { id: 1, email: 'toto', password: '123toto', roles: ['USER', 'ADMIN'] },
    { id: 2, email: 'titi', password: '123titi', roles: ['USER'] },

  ];

  constructor() { }
 
}
