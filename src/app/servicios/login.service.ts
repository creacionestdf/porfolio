import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  uri = 'http://localhost:3000/api';
  token!:String;

  constructor( ) { }
}
