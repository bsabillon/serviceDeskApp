import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {incident} from '../../../models/incident'
import { DataService } from '../../../services/data.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-work-order-details',
  templateUrl: './work-order-details.component.html',
  styleUrls: ['./work-order-details.component.css']
})
export class WorkOrderDetailsComponent implements OnInit {
public incident: any = [];
public id: number;
public source: string;
public technicianName: string;
public requestorName: string;
public callbackMethod: string;
public symptomsDescription: string;
public location:string;
public department: string;
public affectedUser: string;
public affectedService: string;
public incidentSummary: string; 
public incidentPriority: string; 
public incidentType: string;
public incidentSubtype: string;
public incidentCategory: string;
public incidentStatus: string;
public incidentActivity: string;
public incidentResolution: string;
public incidentResolutionCategory: string;
public customerFeedback:string;


  constructor(
    private route: ActivatedRoute, 
    public router: Router, 
    public dataService: DataService,
    private _snackBar: MatSnackBar
  ) {this.id = this.route.snapshot.params.id; }

  

  ngOnInit() {
    this.getIncidentDetail();
  }

  getIncidentDetail() {
    this.dataService.getIncidentById(this.id).subscribe((incident: incident) => {
      this.incident = incident;
    });
  }


}
