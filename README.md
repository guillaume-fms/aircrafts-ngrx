# AirbusAppNgrx
/* Exos Angular_NgRx semaine du 25 Avril 2023 aux vacances Mai 2023 */

This project was generated with Angular CLI version 15.2.5.


![avions - Copie](https://user-images.githubusercontent.com/90391689/236433604-feb42fb8-9e3c-48ca-8d53-6c84423ad979.jpg)


## Immersion sur NgRx

Après avoir digérer la masterclass « Angular-NgRx » vous devez préparer une présentation
sur NgRx à votre sauce de sorte que vous vous appropriez la librairie usant de tous les outils
pédagogiques à votre disposition (masterclass, ressources web, magic chart...)

Ensuite et dans l’ordre, vous devez :

    - Réaliser le projet airbus-ngrx-app.

    - Ajouter un formulaire d’authentification permettant aux seuls utilisateurs en base
    d’avoir accès à l’appli, attention il faut utiliser NgRx et pas faire d’écart.

    - Ajouter à l’application la fonctionnalité de gestion de configuration d’un avion,
    permettant de personnaliser un avion avec une ou plusieurs options, n’hésitez pas à
    utiliser les diagrammes Uml. De même, une maquette de cette nouvelle fonctionnalité
    doit être fournie.

### Exploitation de NgRx

Pour ce faire, il faut installer les dépendances :

    ● npm install @ngrx/store
    
    ● npm install @ngrx/effects
    
    ● npm install @ngrx/store-devtools
    
Ajouter les 3 modules dans app.module

Ajouter un dossier ngrx et nos fichiers :

     State, Actions, Effects, Reducer

Entity

    ● npm install @ngrx/entity --save
