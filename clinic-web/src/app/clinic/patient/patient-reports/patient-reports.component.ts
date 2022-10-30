import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Patient} from "../../../services/Profile";
import {ReportService} from "../../../services/ReportService";
import {PatientService} from "../../../services/PatientService";

@Component({
  selector: 'app-patient-reports',
  templateUrl: './patient-reports.component.html',
  styleUrls: ['./patient-reports.component.css']
})
export class PatientReportsComponent implements OnInit {

  public patientCode: string = '';
  public patient: Patient = new Patient();

  constructor(private route: ActivatedRoute, private reportService: ReportService, private patientService: PatientService) {
    this.patientCode = route.snapshot.paramMap.get('patientId') || '';
    this.route.data.subscribe((data) => this.patient = data['patient']);
  }

  ngOnInit(): void {
  }

  deleteReport(reportId: string) {
    this.reportService.deleteReport(reportId).subscribe(() => {
      this.patientService.getReports(this.patientCode).subscribe(patient => {
        // @ts-ignore
        this.patient = patient;
      })
    })
  }

}
