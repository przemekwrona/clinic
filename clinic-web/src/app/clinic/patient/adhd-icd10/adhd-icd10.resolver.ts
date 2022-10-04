import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {ReportService} from "../../../services/ReportService";
import {AdhdIcd10} from "./adhd-icd10.component";

@Injectable()
export class AdhdIcd10Resolver implements Resolve<AdhdIcd10> {

  constructor(private reportService: ReportService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<AdhdIcd10> | AdhdIcd10 {
    return this.reportService.getAdhdIcd10(route.params['reportId']);
  }

}
