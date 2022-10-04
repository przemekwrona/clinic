import {Component, OnInit} from '@angular/core';
import {Project} from "../../../services/Profile";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css']
})
export class ResearchComponent implements OnInit {

  public projects: Project[] = [];

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => this.projects = data['profile'].projects)
  }

  hasNoProjects(): boolean {
    return this.projects.length == 0;
  }

}
