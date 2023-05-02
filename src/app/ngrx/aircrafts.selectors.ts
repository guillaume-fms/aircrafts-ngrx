import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AircraftsState } from "./aircrafts.state";
import { Aircraft } from "../model/aircraft.model";



//nous souhaitons renvoyer le nombre d'avions à la fois en phase d'étude et de construction pour alerter par ex
export const selectCountAlertAircrafts = createSelector(
    createFeatureSelector('airbusState'),  //nous spécifions ici le state sur lequel va agir notre selector
    (state: AircraftsState) => {    //nous récupérons notre state pour extraire des données, ici la liste d'avions
      let total: number = 0;
      state.aircrafts.forEach(a => {
        if (a.development == true && a.design == true) total++;
      })
      return total;
    }
  );

  export const selectAlertAircrafts = createSelector(
    createFeatureSelector('airbusState'),
    (state: AircraftsState) => {
      let aircrafts : Aircraft[] = new Array<Aircraft>();
      state.aircrafts.forEach(a =>
        {
          if (a.development == true && a.design == true){
            aircrafts.push(a);  // La méthode push() ajoute un ou plusieurs éléments à la fin d'un tableau 
          }
        });
        return aircrafts;
    }

  );

   
    
