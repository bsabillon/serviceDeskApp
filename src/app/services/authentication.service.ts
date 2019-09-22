import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import {user} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  headers = new HttpHeaders({'Content-Type' : 'application/json'});
  public endpoint = 'http://localhost:5000';
  public user: user;

  constructor(private http: HttpClient, public router: Router) { }

  getUsers() {
    return this.http.get(`${this.endpoint}/users`);
  }

  getUserById(id: number){
    return this.http.get(`${this.endpoint}/users/byId/${id}`);
  }

  postUser(user: user) {
    return this.http.post(`${this.endpoint}/users/add`,user, {responseType: 'text'});
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.endpoint}/users/delete/${id}`, {responseType: 'text'});
  }

  updateUser(id: number,user: user ){
    return this.http.put(`${this.endpoint}/users/update/${id}`,user, {responseType: 'text'});
  }



}



