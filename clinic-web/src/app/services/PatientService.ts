import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Patient, PatientResponse} from "../clinic/patient/patient-creation/patient-creation.component";
import {Observable} from "rxjs";

@Injectable()
export class PatientService {

  constructor(private http: HttpClient) {
  }

  postPatient(patient: Patient): Observable<PatientResponse> {
    return this.http.post<PatientResponse>(`/api/patients`, patient);
  }

  getPatients(): Observable<PatientResponse[]> {
    return this.http.get<PatientResponse[]>(`/api/patients`);
  }

  getReports(code: string): Observable<Patient> {
    return this.http.get<Patient>(`/api/patients/${code}/reports`);
  }

  postReports(code: string, reportType: string, report: string): Observable<any> {
    return this.http.post(`/api/patients/${code}/reports`, {reportType: reportType, report: report});
  }

}
