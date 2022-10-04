import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {Patient} from "../../../services/Profile";
import {ProfileService} from "../../../services/ProfileService";

@Injectable()
export class PatientsResolver implements Resolve<Patient[]> {

  constructor(private profileService: ProfileService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Patient[]> | Patient[] {
    return this.profileService.getPatients();
  }

}
