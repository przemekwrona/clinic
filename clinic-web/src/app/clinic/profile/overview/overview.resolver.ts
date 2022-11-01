import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Summary, UserService} from "../../../services/UserService";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class OverviewResolver implements Resolve<Summary> {

  constructor(private userService: UserService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Summary> {
    return this.userService.getSummary();
  }

}
