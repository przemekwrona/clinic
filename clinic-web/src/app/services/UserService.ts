import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

export class Summary {

  public numberOfReports: number = 0;
  public numberOfPatients: number = 0;
}

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }

  getSummary(): Observable<Summary> {
    return this.http.get<Summary>(`/api/users/summary`);
  }

  postNameSurname(name: string, surname: string) {
    return this.http.post<any>(`/api/users`, {
      name: name,
      surname: surname
    });
  }
}
