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
    this.activatedRoute.data.subscribe((data) => this.adhdIcd10 = data['report'] == null ? new AdhdIcd10() : data['report'])
  }

  ngOnInit(): void {
  }

  sumIcd10(): number {
    return this.sumAttentionDisorders()
      + this.sumHyperactivity();
  }

  sumAttentionDisorders(): number {
    return this.adhdIcd10.attentionDisorderInSchool
      + this.adhdIcd10.attentionDisorderDuringPlay
      + this.adhdIcd10.hearingDisorder
      + this.adhdIcd10.completionTaskDisorder
      + this.adhdIcd10.losingThings
      + this.adhdIcd10.difficultyOrganizingWork
      + this.adhdIcd10.avoidanceOfProlongedMentalExertion
      + this.adhdIcd10.externalStimuliDisorder
      + this.adhdIcd10.forgetful;
  }

  sumHyperactivity(): number {
    return this.adhdIcd10.nervousMovements
      + this.adhdIcd10.childGetsUpUninvited
      + this.adhdIcd10.childClimbsOnFurniture
      + this.adhdIcd10.excessivelyNoisy
      + this.adhdIcd10.excessivePhysicalActivity
  }

}

export class AdhdIcd10 {

  public firstName: string = '';
  public lastName: string = '';

  public attentionDisorderInSchool: number = -1;
  public attentionDisorderDuringPlay: number = -1;
  public hearingDisorder: number = -1;
  public completionTaskDisorder: number = -1;
  public losingThings: number = -1;
  public difficultyOrganizingWork: number = -1;
  public avoidanceOfProlongedMentalExertion: number = -1;
  public externalStimuliDisorder: number = -1;
  public forgetful: number = -1;

  public nervousMovements: number = -1;
  public childGetsUpUninvited: number = -1;
  public childClimbsOnFurniture: number = -1;
  public excessivelyNoisy: number = -1;
  public excessivePhysicalActivity: number = -1;

}
