import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { AircraftsComponent } from './components/aircrafts/aircrafts.component';
import { AircraftsNavbarComponent } from './components/aircrafts/aircrafts-navbar/aircrafts-navbar.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AircraftsAlertComponent } from './components/aircrafts-alert/aircrafts-alert.component';
import { FormsModule } from '@angular/forms';
import { AircraftsReducer } from './ngrx/aircrafts.reducer';
import { AircraftsEffects } from './ngrx/aircrafts.effects';
import { AuthenticformComponent } from './components/authenticform/authenticform.component';


@NgModule({
  declarations: [
    AppComponent,
    AircraftsComponent,
    AircraftsNavbarComponent,
    AircraftsAlertComponent,
    AuthenticformComponent,

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({airbusState : AircraftsReducer}),  // spécifier le reducer
    EffectsModule.forRoot([AircraftsEffects]), // spécifier les effects
    StoreDevtoolsModule.instrument() // en l'activant ici, à chaque action de NgRx dans l'appli
  ],                                 // le plugin redux (chrome) permet l'analyse du state durant le dev
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
