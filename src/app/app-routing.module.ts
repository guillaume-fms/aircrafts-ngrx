import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AircraftsComponent } from './components/aircrafts/aircrafts.component';
import { AircraftsAlertComponent } from './components/aircrafts-alert/aircrafts-alert.component';
import { AuthenticformComponent } from './components/authenticform/authenticform.component';
import { UserComponent } from './components/user/user.component';
import { UserGuard } from './user.guard';

const routes: Routes = [
  {
    path: 'user', component: UserComponent,
    canActivate: [UserGuard]
  },
  { path : "authenticform", component : AuthenticformComponent},
  { path : "aircrafts", component : AircraftsComponent},
  { path : "aircrafts-alert", component : AircraftsAlertComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
