import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Aircraft } from 'src/app/model/aircraft.model';

@Component({
  selector: 'app-aircrafts-alert',
  templateUrl: './aircrafts-alert.component.html',
  styleUrls: ['./aircrafts-alert.component.css']
})
export class AircraftsAlertComponent {
  alertAircfrats$: Observable<Aircraft[]> | null = null;


  constructor(private store: Store<any>) {
    
  }

  ngOnInit(): void {}
}

