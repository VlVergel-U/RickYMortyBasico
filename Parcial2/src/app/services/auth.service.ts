import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private _http : HttpClient) { }

  getToken(user: string, password: string){
    return this._http.post("https://api.escuelajs.co/api/v1/auth/login", {
      email : user,
      password : password
    });
  }

  getUser(){
    return this._http.get("https://api.escuelajs.co/api/v1/auth/profile", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    });
  }
}
