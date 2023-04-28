import { Action } from "@ngrx/store";
import { AircraftsState, AircraftsStateEnum, initState } from "./aircrafts.state";
import { AircraftsActions, AircraftsActionsTypes } from "./aircrafts.action";


export function AircraftsReducer(state: AircraftsState = initState, action: Action) {
    switch (action.type) {           // pour chaque action, on retourne un clone du state (immutable)
        case AircraftsActionsTypes.GET_ALL_AIRCRAFTS:
            console.log("loading.... ça arrive !!");
            return { ...state, dataState: AircraftsStateEnum.LOADING }   // renvoi clone du state + le nouveau dataState

        case AircraftsActionsTypes.GET_ALL_AIRCRAFTS_SUCCESS:
            // Action a été reçu par l'effect qui a fait une demande en base, reçoit les datas et génère l'action pour indiquer que tout est ok
            return { ...state, dataState: AircraftsStateEnum.LOADED, aircrafts: (<AircraftsActions>action).payload }
        // renvoi clone + nouveau dataState + liste des avions en base contenu dans le payload

        case AircraftsActionsTypes.GET_ALL_AIRCRAFTS_ERROR:
            return { ...state, dataState: AircraftsStateEnum.ERROR, errorMessage: (<AircraftsActions>action).payload }
        default:
            return { ...state }



        // Get Designed Aircrafts
        case AircraftsActionsTypes.GET_DESIGNED_AIRCRAFTS:
            return { ...state, dataState: AircraftsStateEnum.LOADING }
        case AircraftsActionsTypes.GET_DESIGNED_AIRCRAFTS_SUCCESS:
            return { ...state, dataState: AircraftsStateEnum.LOADED, aircrafts: (<AircraftsActions>action).payload }
        case AircraftsActionsTypes.GET_DESIGNED_AIRCRAFTS_ERROR:
            return { ...state, dataState: AircraftsStateEnum.ERROR, errorMessage: (<AircraftsActions>action).payload }

        // Get Development Aircrafts
        case AircraftsActionsTypes.GET_DEVELOPMENT_AIRCRAFTS:
            return { ...state, dataState: AircraftsStateEnum.LOADING }
        case AircraftsActionsTypes.GET_DEVELOPMENT_AIRCRAFTS_SUCCESS:
            return { ...state, dataState: AircraftsStateEnum.LOADED, aircrafts: (<AircraftsActions>action).payload }
        case AircraftsActionsTypes.GET_DEVELOPMENT_AIRCRAFTS_ERROR:
            return { ...state, dataState: AircraftsStateEnum.ERROR, errorMessage: (<AircraftsActions>action).payload }


    }

}