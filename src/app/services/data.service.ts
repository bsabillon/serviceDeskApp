import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import {incident} from '../models/incident';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  headers = new HttpHeaders({'Content-Type' : 'application/json'});
  public endpoint = 'http://localhost:5000';
  public incident: incident;

  constructor(private http: HttpClient, public router: Router) { }

  getIncidents() {
    return this.http.get(`${this.endpoint}/incidents`);
  }

  getIncidentById(id: number){
    return this.http.get(`${this.endpoint}/incidents/byId/${id}`);
  }

  postIncident(incident: incident) {
    return this.http.post(`${this.endpoint}/incidents/add`,incident, {responseType: 'text'});
  }

  deleteIncident(id: number) {
    return this.http.delete(`${this.endpoint}/incidents/delete/${id}`, {responseType: 'text'});
  }

  updateIncident(id: number,incident: incident ){
    return this.http.put(`${this.endpoint}/incidents/update/${id}`,incident, {responseType: 'text'});
  }






}
