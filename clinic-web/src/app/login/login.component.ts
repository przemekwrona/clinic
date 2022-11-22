import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { LoginService } from "../services/LoginService";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public username = '';
  public password = '';

  public isRegistration = false;

  constructor(private route: ActivatedRoute, private loginService: LoginService, private router: Router) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
        this.isRegistration = params['isRegistration'];
      }
    );
  }

  getYear(): number {
    return new Date().getFullYear()
  }

  login() {
    this.loginService.login(this.username, this.password).subscribe((authResponse) => {
      this.username = '';
      this.password = '';
      this.router.navigate(["profile", "overview"])
    });
  }

}
