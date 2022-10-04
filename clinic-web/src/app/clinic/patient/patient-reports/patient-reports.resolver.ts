import {Injectable} from "@angular/core";
import {ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {PatientService} from "../../../services/PatientService";
import {Patient} from "../patient-creation/patient-creation.component";

@Injectable()
export class PatientReportsResolver implements Resolve<Patient> {

  constructor(private patientService: PatientService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Patient> | Patient {
    const patientId: string = route.paramMap.get('patientId') || 'undefined';
    return this.patientService.getReports(patientId);
  }

}
