import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-k-sads-pl',
  templateUrl: './k-sads-pl.component.html',
  styleUrls: ['./k-sads-pl.component.scss']
})
export class KSadsPLComponent implements OnInit {

  public kSadsPl: KSadsPl = new KSadsPl();

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe((data) => this.kSadsPl = data['report'])
  }

  ngOnInit(): void {
  }

}

export class KSadsPl {
  public id: number | undefined;
  public firstName: string = '';
  public lastName: string = '';
  public gender: string = '';
  public ethnicity: string = '';

  public isRaceBlack: boolean = false;
  public isRaceAsian: boolean = false;
  public isRaceWhite: boolean = false;
  public isRaceOther: boolean = false;
  public isRaceHawaiian: boolean = false;
  public isRaceAmerican: boolean = false;

  public livingPerson: string = '';
  public informantPerson: string = '';

  public primaryCaregiverFirstName: string = '';
  public primaryCaregiverLastName: string = '';
  public primaryCaregiverRelation: string = '';

  public secondaryCaregiverFirstName: string = '';
  public secondaryCaregiverLastName: string = '';
  public secondaryCaregiverRelation: string = '';

  public mothersAgeAtBirthOfChild: number | undefined;
  public didMotherHaveAnyIllnessInjuryDuringPregnancy: boolean | undefined;
  public didMotherTakeAnyMedicationsOtherThanVitaminsIron: boolean | undefined;
  public didMotherDrinkOrUseElicitDrugsDuringPregnancy: boolean | undefined;
  public didMotherSmokeDuringPregnancy: boolean | undefined;
  public wasTheBabyPremature: boolean | undefined;
  public whatWasTheBirthWeight: number | undefined;
  public didTheBabyHaveAnyTroubleAtBirth: boolean | undefined;
  public didTheBabyHaveAnyOtherTrouble: boolean | undefined;
  public howManyDaysDidTheBabyStayInTheHospitalAfterBirth: number | undefined;
}
