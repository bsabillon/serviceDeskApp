import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';
import { incident } from './../../../models/incident';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-all-work-orders',
  templateUrl: './all-work-orders.component.html',
  styleUrls: ['./all-work-orders.component.css']
})
export class AllWorkOrdersComponent implements OnInit {
  public incidents: any = [];


  constructor(public router: Router, public dataService: DataService) { }

  ngOnInit() {
    this.getIncidents();
  }

  getIncidents() {
    this.dataService.getIncidents().subscribe((incident: incident) => {
      this.dataService.incident = incident;
      this.incidents = incident;
    });
  }



}
