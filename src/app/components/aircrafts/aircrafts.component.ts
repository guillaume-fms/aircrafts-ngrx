import { Component, OnInit, ɵsetAllowDuplicateNgModuleIdsForTest } from '@angular/core';
import { Aircraft } from 'src/app/model/aircraft.model';
import { AircraftService } from 'src/app/services/aircraft.service';

@Component({
  selector: 'app-aircrafts',
  templateUrl: './aircrafts.component.html',
  styleUrls: ['./aircrafts.component.css']
})
export class AircraftsComponent implements OnInit {
  aircrafts : Aircraft [] | null = null; //un tableau d'avions soit null d'ou l'affectation
  error = null;

  constructor(private aircraftservice : AircraftService) {}
  
  ngOnInit(): void {}


getAllAircrafts(){
 /* Option1 : nous observons ici ce qui se passe lorsqu'on déclenche l'évènement : récupérer la liste
  d'avions en base de données */
this.aircraftservice.getAircrafts().subscribe ({
  next : (data) => this.aircrafts = data,
  error : (err) => this.error = err.message,
  complete : () => this.error = null

})
}

getDesignedAircrafts(){}


getDevelopementAircrafts() {}

}