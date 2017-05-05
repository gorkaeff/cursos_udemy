import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private translate: TranslateService) {
      translate.addLangs(["en", "es"]);
      translate.setDefaultLang('en');

      let browserLang = translate.getBrowserLang();
      translate.use(browserLang.match(/en|es/) ? browserLang : 'en');
  }

  lat: number = 42.671270;
  lng: number = -2.032335;
  zoom: number = 16;
}