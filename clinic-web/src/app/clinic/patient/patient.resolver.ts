import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {PatientService} from "../../services/PatientService";
import {PatientResponse} from "./patient-creation/patient-creation.component";

@Injectable()
export class PatientsResolver implements Resolve<PatientResponse[]> {

  constructor(private patientService: PatientService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PatientResponse[]> | PatientResponse[] {
    return this.patientService.getPatients();
  }

}
