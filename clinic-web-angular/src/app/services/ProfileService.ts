import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Patient, Profile} from "./Profile";

@Injectable()
export class ProfileService {

  constructor(private http: HttpClient) {
  }

  getProfile() {
    return this.http.get<Profile>('/api/profile');
  }

  getPatients() {
    return this.http.get<Patient[]>('/api/patients')
  }

}
