import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'routing-app';

  constructor(public translateService: TranslateService) {
    this.changeLanguage("pl");
  }

  public changeLanguage(language: string): void {
    this.translateService.use(language);
  }
}
