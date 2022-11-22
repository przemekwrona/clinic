import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Patient, PatientResponse } from "../clinic/patient/patient-creation/patient-creation.component";
import { Observable } from "rxjs";
import { UserRegistrationRequest } from "../../api/generated";

@Injectable()
export class RegisterService {

  constructor(private http: HttpClient) {
  }

  postRegister(user: UserRegistrationRequest): Observable<any> {
    return this.http.post(`/api/register`, user);
  }

}
