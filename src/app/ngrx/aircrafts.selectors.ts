import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AircraftsState } from "./aircrafts.state";



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