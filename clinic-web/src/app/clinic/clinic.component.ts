import { Component, OnInit } from '@angular/core';
import { LoginService } from "../services/LoginService";

@Component({
  selector: 'app-clinic',
  templateUrl: './clinic.component.html',
  styleUrls: ['./clinic.component.scss']
})
export class ClinicComponent implements OnInit {

  constructor(private loginService: LoginService) {
  }

  ngOnInit(): void {
  }

  getYear(): number {
    return new Date().getFullYear();
  }

  showAlert() {
    return this.loginService.isLogged();
  }

}
