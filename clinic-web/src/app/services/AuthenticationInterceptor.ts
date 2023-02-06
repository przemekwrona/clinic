import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest, HttpClient, HttpResponse,
} from '@angular/common/http';
import {Observable, tap} from 'rxjs';
import {Injectable} from '@angular/core';
import {LoginService} from "./LoginService";

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor(private loginService: LoginService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Clone the request to add the new header
    const token = 'Bearer ' + this.loginService.getLoggedUser().token;
    const clonedRequest = req.clone({headers: req.headers.append('Authorization', token)});

    // Pass the cloned request instead of the original request to the next handle
    return next.handle(clonedRequest).pipe(tap((response: HttpEvent<any>) => {

      if (response instanceof HttpResponse) {
        const refreshedToken: string = response?.headers.get('Authorization') || '';
        this.loginService.refreshToken(refreshedToken);
      }
    }));
  }
}
