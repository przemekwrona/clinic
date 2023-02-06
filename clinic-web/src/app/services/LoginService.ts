import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {AuthRequest, AuthResponse} from "../../api/generated";

@Injectable()
export class LoginService {

  private loggedUser: AuthResponse = {};

  constructor(private http: HttpClient) {
  }

  login(name: string, password: string): Observable<AuthResponse> {
    const authRequest: AuthRequest = {};
    authRequest.email = name;
    authRequest.password = password;

    return this.http.post<AuthResponse>(`/api/login`, authRequest)
      .pipe(map(response => this.loggedUser = response));
  }

  getLoggedUser(): AuthResponse {
    return this.loggedUser;
  }

  isLogged(): boolean {
    return this.loggedUser.token == null;
  }

  refreshToken(token: string) {
    this.loggedUser.token = token;
  }

}
