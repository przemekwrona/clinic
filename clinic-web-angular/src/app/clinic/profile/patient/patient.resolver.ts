import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {Patients} from "../../../services/Profile";
import {ProfileService} from "../../../services/ProfileService";

@Injectable()
export class PatientsResolver implements Resolve<Patients> {

  constructor(private profileService: ProfileService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Patients> | Patients {
    return this.profileService.getPatients();
  }

}
