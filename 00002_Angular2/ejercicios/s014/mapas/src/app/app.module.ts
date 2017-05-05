import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from "@angular/http";

//translate
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

//google maps
import { AgmCoreModule } from 'angular2-google-maps/core';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: Http) {
    return new TranslateHttpLoader(http, "src/i18n/", ".json");
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]
      }
    }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBV2jKZ5mUUlxCKGsZKQJM-HNiL-7JZzMA'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
