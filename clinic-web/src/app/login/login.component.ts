import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { LoginService } from "../services/LoginService";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public isClickLogin = false;

  public username = '';
  public password = '';

  public isRegistration = false;

  loginForm = new FormGroup({
    username: new FormControl(this.username, [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl(this.password, [
      Validators.required,
      Validators.minLength(8)
    ])
  })

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
    this.isClickLogin = true;

    if (this.loginForm.valid) {
      this.loginService.login(this.username, this.password).subscribe((authResponse) => {
        this.username = '';
        this.password = '';
        this.router.navigate(["profile", "overview"])
      });
    }

  }

}
