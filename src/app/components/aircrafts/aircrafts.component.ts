import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { AircraftsState, AircraftsStateEnum } from 'src/app/ngrx/aircrafts.state';


@Component({
  selector: 'app-aircrafts',
  templateUrl: './aircrafts.component.html',
  styleUrls: ['./aircrafts.component.css']
})
export class AircraftsComponent implements OnInit {
  aircraftsState$:Observable<AircraftsState> | null = null; 
  readonly aircraftsStateEnum = AircraftsStateEnum;
  constructor(private store : Store<any>) {}
  
  ngOnInit(): void {  // avant tout, notre composant doit faire un pipe vers le store
    this.aircraftsState$ = this.store.pipe( // on écoute ce qui se passe dans le store, dès qu'on reçoit les données, on peut faire 
    // un map, autrement dit : nous recevons le state dès qu'il change afin de permettre l'affichage adéquat de ses données
    map((state) => state.airbusState)
    );
  }



}