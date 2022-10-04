import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Patient, Profile} from "./Profile";
import {Observable} from "rxjs";

@Injectable()
export class ProfileService {

  constructor(private http: HttpClient) {
  }

  getProfile(): Observable<Profile> {
    return this.http.get<Profile>('/api/profile');
  }

  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>('/api/patients');
  }

}
