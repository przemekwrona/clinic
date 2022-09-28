import {Component, Input, OnInit} from '@angular/core';
import {Project} from "../../../../services/Profile";

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css']
})
export class ProjectItemComponent implements OnInit {

  @Input() project: Project = new Project();

  constructor() { }

  ngOnInit(): void {
  }

}
