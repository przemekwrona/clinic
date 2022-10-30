import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {KSadsPl} from "../clinic/patient/k-sads-pl/k-sads-pl.component";
import {AdhdIcd10} from "../clinic/patient/adhd-icd10/adhd-icd10.component";
import {Observable} from "rxjs";

@Injectable()
export class ReportService {

  constructor(private http: HttpClient) {
  }

  getKSadsPlReport(id: number): Observable<KSadsPl> {
    return this.http.get<KSadsPl>(`/api/reports/${id}`);
  }

  getAdhdIcd10(id: number): Observable<AdhdIcd10> {
    return this.http.get<AdhdIcd10>(`/api/reports/${id}`);
  }

  deleteReport(reportId: string): Observable<any> {
    return this.http.delete<any>(`/api/reports/${reportId}`);
  }

}
