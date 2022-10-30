import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ReportService} from "../../../services/ReportService";
import {PatientService} from "../../../services/PatientService";

@Component({
  selector: 'app-k-sads-pl',
  templateUrl: './k-sads-pl.component.html',
  styleUrls: ['./k-sads-pl.component.scss']
})
export class KSadsPLComponent implements OnInit {

  public kSadsPl: KSadsPl = new KSadsPl();
  public patientCode: string = '';

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private patientService: PatientService) {
    this.activatedRoute.data.subscribe((data) => this.kSadsPl = data['report'] || new KSadsPl());
    this.patientCode = this.activatedRoute.snapshot.paramMap.get('patientId') || '';
  }

  ngOnInit(): void {
  }

  save(): void {
    this.patientService.postReports(this.patientCode, "K_SADS_PL", JSON.stringify(this.kSadsPl))
      .subscribe(response => {
        this.router.navigate(['patients', this.patientCode, 'reports']);
      });
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
