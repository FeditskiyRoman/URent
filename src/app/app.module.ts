import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CustomFormsModule } from 'ngx-custom-validators';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { AuthenticationService } from './authentication.service';
import { AuthGuardService } from './auth-guard.service';
import { RentService } from './rent.service';
import { RentListComponent } from './rent-list/rent-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RentBlockComponent } from './rent-block/rent-block.component';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { RentPageComponent } from './rent-page/rent-page.component';
import { AppRoutingModule } from './app-routing.module';
import { MomentModule } from 'ngx-moment';
import { NguiMapModule} from '@ngui/map';
import { NgSelectModule } from '@ng-select/ng-select';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { RentFormComponent } from './rent-form/rent-form.component';
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    RentListComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    PageNotFoundComponent,
    RentBlockComponent,
    RentPageComponent,
    RentFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CustomFormsModule,
    NgbModule.forRoot(),
    GooglePlaceModule,
    AppRoutingModule,
    MomentModule,
    NgSelectModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyAk5flZubiHIfvBh2NFIeNf9Qu-YasEAhM'}),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    RentService,
    AuthenticationService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
