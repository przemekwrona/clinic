import {Component, OnInit} from '@angular/core';
import {Profile} from "../../services/Profile";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public editable: boolean = false;
  public profile: Profile = new Profile();

  public activeTab: Tabs | undefined;
  public TABS = Tabs;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {

    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        switch (event.url) {
          case '/profile/overview': {
            this.activeTab = Tabs.OVERVIEW;
            break;
          }
          case '/profile/patients': {
            this.activeTab = Tabs.PATIENTS;
            break;
          }
          case '/profile/research': {
            this.activeTab = Tabs.RESEARCH;
            break;
          }
          default: {
            this.activeTab = Tabs.OVERVIEW;
            break;
          }
        }
      }
    })
  }


  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => this.profile = data['profile'])
  }

  isActive(tab: Tabs) {
    return this.activeTab === tab;
  }

  public save() {
    this.editable = false;
  }

  public cancel() {
    this.editable = false;
  }

  public edit() {
    this.editable = true;
  }

}

export enum Tabs {
  OVERVIEW, PATIENTS, RESEARCH
}
