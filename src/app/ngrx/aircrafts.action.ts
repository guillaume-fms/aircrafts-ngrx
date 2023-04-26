import { Action } from "@ngrx/store";
import { Aircraft } from "../model/aircraft.model";



export enum AircraftsActionsTypes {
    // Action : Get All Aircrafts
    // S'agissant de l'action consistant à afficher tous les avions, nous avons 3 états possible
    GET_ALL_AIRCRAFTS = "[Aircrafts] Get All Aircrafts",  // demande tous les avions
    GET_ALL_AIRCRAFTS_SUCCESS = "[Aircrafts] Get All Aircrafts Success",  // demande ok
    GET_ALL_AIRCRAFTS_ERROR = "[Aircrafts] Get All Aircrafts Error",   // demande pas ok 
}

// Get all Aircrafts
export class GetAllAircraftsAction implements Action {
   type : AircraftsActionsTypes = AircraftsActionsTypes.GET_ALL_AIRCRAFTS;
   constructor(public payload : any) {
   }      
}

export class GetAllAircraftsActionSuccess implements Action{
    type : AircraftsActionsTypes = AircraftsActionsTypes.GET_ALL_AIRCRAFTS_SUCCESS;
    constructor(public payload : Aircraft []){      
    }
} 

export class GetAllAircraftsActionError implements Action {
    type : AircraftsActionsTypes = AircraftsActionsTypes.GET_ALL_AIRCRAFTS_ERROR;
    constructor(public payload : string) {    // message d'erreur
    }
}

export type AircraftsActions = GetAllAircraftsAction | GetAllAircraftsActionSuccess| GetAllAircraftsActionError;