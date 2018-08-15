import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RentListComponent } from './rent-list/rent-list.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuardService } from './auth-guard.service';
import { RentPageComponent } from './rent-page/rent-page.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService] },
  { path: 'rent-list', component: RentListComponent, canActivate: [AuthGuardService] },
  { path: 'rent/:id', component: RentPageComponent, canActivate: [AuthGuardService] },
  { path: '', redirectTo: 'rent-list', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
