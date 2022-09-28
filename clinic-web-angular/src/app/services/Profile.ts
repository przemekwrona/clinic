export class Profile {
  public id: string = '';
  public name: string = '';
  public surname: string = '';
  public pwz: string = '';
  public projects: Project[] = [];
}

export class Project {
  public id: string = '';
  public name: string = '';
  public description: string = '';
}

export class Patient {
  public id: string = '';
  public code: string = '';
  public name: string = '';
  public description: string = '';
  public surveys: Survey[] = [];
}

export class Survey {
  public id: string = '';
  public name: string = '';
  public type: SurveyType = SurveyType.GENERAL;
  public date: string = '';
}

export enum SurveyType {
  GENERAL = 'GENERAL',
  K_SADS_PL= 'K_SADS_PL',
  ADHD_ICD_10 = 'ADHD_ICD_10'
}
