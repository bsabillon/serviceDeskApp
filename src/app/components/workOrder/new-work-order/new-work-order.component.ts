import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {incident} from '../../../models/incident';
import {DataService} from '../../../services/data.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-work-order',
  templateUrl: './new-work-order.component.html',
  styleUrls: ['./new-work-order.component.css']
})
export class NewWorkOrderComponent implements OnInit {
   id: number;
   source: string;
   technicianName: string;
   requestorName: string;
   callbackMethod: string;
   symptomsDescription: string;
   location:string;
   department: string;
   affectedUser: string;
   affectedService: string;
   incidentSummary: string; 
   incidentPriority: string; 
   incidentType: string;
   incidentSubtype: string;
   incidentCategory: string;
   incidentStatus: string;
   incidentActivity: string;
   incidentResolution: string;
   incidentResolutionCategory: string;
   customerFeedback:string;

  constructor(public router: Router, public dataService: DataService,private _snackBar: MatSnackBar) { }

  openSnackBar(){
    this._snackBar.open('Incident added successfully!','',{duration: 4000})
  }


  ngOnInit() {
  }

  addIncident(){
    const incident: incident={
      id: this.id,
      source: this.source,
      technicianName: this.technicianName,
      requestorName: this.requestorName,
      callbackMethod: this.callbackMethod,
      symptomsDescription: this.symptomsDescription,
      location:this.location,
      department: this.department,
      affectedUser: this.affectedUser,
      affectedService: this.affectedService,
      incidentSummary: this.incidentSummary, 
      incidentPriority: this.incidentPriority, 
      incidentType: this.incidentType,
      incidentSubtype: this.incidentSubtype,
      incidentCategory: this.incidentCategory,
      incidentStatus: this.incidentStatus,
      incidentActivity: this.incidentActivity,
      incidentResolution: this.incidentResolution,
      incidentResolutionCategory: this.incidentResolutionCategory,
      customerFeedback:this.customerFeedback,
    }

    this.dataService.postIncident(incident).subscribe((data)=>{
      this.dataService.incident=incident;
      this.router.navigate(['/incidents']);
      this.openSnackBar();
    })

  }


}
