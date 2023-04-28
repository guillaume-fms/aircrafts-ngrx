import { Injectable } from "@angular/core";
import { AircraftService } from "../services/aircraft.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Observable, catchError } from "rxjs";
import { Action } from "@ngrx/store";
import { AircraftsActionsTypes, GetAllAircraftsActionError, GetAllAircraftsActionSuccess } from "./aircrafts.action";
import { mergeMap } from "rxjs";
import { map } from "rxjs";
import { of } from "rxjs";



@Injectable()  //décorateur spéficie qu'il s'agit d'un service
export class AircraftsEffects {
    constructor(private aircraftService: AircraftService, private effectActions: Actions) {
    }

getAllAircraftsEffect : Observable<Action> = createEffect(   // nous souhaitons créer un effect ici sous condition, donc on écoute les actions
    () => this.effectActions.pipe(                          // dès qu'une action arrive, on vérifie son type
        ofType(AircraftsActionsTypes.GET_ALL_AIRCRAFTS),    // si l'action est de type GET_ALL_AIRCRAFTS alors étape suivante : mergeMap
        mergeMap((action) => {
            return this.aircraftService.getAircrafts().pipe(    // attente réception des données en base (liste des avions)
                map((aircrafts) => {console.log('effet');
                return new GetAllAircraftsActionSuccess(aircrafts)}),
                  // si reçu, alors on retourne un Observable<Action>
                                                                                 // dont le playload est la liste des avions
                                                                                // l'action une fois émise va être traité par le Reducer
                                                                               // case AircraftsActionsTypes.GET_ALL_AIRCRAFTS_SUCCESS: 
                catchError((err) => of (new GetAllAircraftsActionError(err.message)))   // s'il y a erreur, génération d'une autre action
            )
        })
    )                         
    
);

}