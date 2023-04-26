import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Aircraft } from 'src/app/model/aircraft.model';
import { AircraftService } from 'src/app/services/aircraft.service';

@Component({
  selector: 'app-aircrafts-navbar',
  templateUrl: './aircrafts-navbar.component.html',
  styleUrls: ['./aircrafts-navbar.component.css']
})
export class AircraftsNavbarComponent {
  aircrafts : Aircraft [] | null = null; // opt1 : un tableau d'avions soit null d'ou l'affectation
  aircraft$ : Observable<Aircraft[]> | null = null; // opt2 : aircrafts est de type observable contenant des avions
  // le cigle $ est une convention d'écriture pour indiquer qu'il s'agit d'un observable 
  error = null;

  constructor(private aircraftService : AircraftService) {}

  getAllAircrafts(){
    /* Option1 : nous observons ici ce qui se passe lorsqu'on déclenche l'évènement : récupérer la liste
     d'avions en base de données */
   this.aircraftService.getAircrafts().subscribe ({
     next : (data) => this.aircrafts = data,
     error : (err) => this.error = err.message,
     complete : () => this.error = null })

    // this.aircraft$ = this.aircraftService.getAircrafts(); // delors il faut bien faire un subscribe puisqu'il n'est plus sollicité ici
     // en effet, l'appel sera fait côté html en précisant (pipe)" | async" toujours pour agir lorsque les données arrivent



   }
   
   getDesignedAircrafts(){}
   
   
   getDevelopementAircrafts() {}
   

}
