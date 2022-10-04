import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Profile} from "../../services/Profile";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {ProfileService} from "../../services/ProfileService";

@Injectable()
export class ProfileResolver implements Resolve<Profile> {

  constructor(private profileService: ProfileService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Profile> | Profile {
    return this.profileService.getProfile();
  }

}
