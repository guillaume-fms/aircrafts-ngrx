import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aircraft } from '../model/aircraft.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root' // Service + accessible dans toute l'appli
})
export class AircraftService {


  constructor(private http:HttpClient) { }

// liste de tous les avions en base => une fois sur 2 on souhaite provoquer une erreur
  public getAircrafts(): Observable<Aircraft[]> {
    let host = Math.random() > 0.5 ? environment.host : environment.unreachableHost;
    return this.http.get<Aircraft[]>(environment.host +"/aircrafts");
  }

// liste des avions en phase de design
  public getDesignedAircratfs(): Observable<Aircraft[]> {
    return this.http.get<Aircraft[]>(environment.host +"/aircrafts?design=true");
  }

// liste des avions en phase de développement
  public getDeveloppementAircrafts(): Observable<Aircraft[]> {
    return this.http.get<Aircraft[]>(environment.host +"/aircrafts?developpment=true");
  }

// renvoi un avion à partir de l'id
  public getAircraftById(id:number) : Observable<Aircraft> {
    return this.http.get<Aircraft>(environment.host + "/aircrafts/" + id);
  }


  public searchAircrafts(name:any) : Observable<Aircraft[]> {
    return this.http.get<Aircraft[]>(environment.host + "/aircrafts?prog_like=" + name);
  
  }
}