import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {KSadsPl} from "./k-sads-pl.component";
import {ReportService} from "../../../services/ReportService";

@Injectable()
export class KSadsPlResolver implements Resolve<KSadsPl> {

  constructor(private reportService: ReportService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<KSadsPl> | KSadsPl {
    return this.reportService.getKSadsPlReport(route.params['reportId']);
  }

}
