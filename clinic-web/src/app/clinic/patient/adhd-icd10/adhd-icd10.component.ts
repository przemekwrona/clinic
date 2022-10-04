import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-adhd-icd10',
  templateUrl: './adhd-icd10.component.html',
  styleUrls: ['./adhd-icd10.component.scss']
})
export class AdhdIcd10Component implements OnInit {

  public adhdIcd10: AdhdIcd10 = new AdhdIcd10();

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe((data) => this.adhdIcd10 = data['report'])
  }

  ngOnInit(): void {
  }

}

export class AdhdIcd10 {

  public firstName: string = '';
  public lastName: string = '';

  public attentionDisorderInSchool: number = -1;
  public attentionDisorderDuringPlay: number = -1;
  public hearingDisorder: number = -1;
  public losingThings: number = -1;
  public externalStimuli: number = -1;
  public forgetful: number = -1;

}
