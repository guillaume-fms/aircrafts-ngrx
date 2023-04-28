import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Aircraft } from 'src/app/model/aircraft.model';
import { selectAlertAircrafts} from 'src/app/ngrx/aircrafts.selectors';
@Component({
  selector: 'app-aircrafts-alert',
  templateUrl: './aircrafts-alert.component.html',
  styleUrls: ['./aircrafts-alert.component.css']
})
export class AircraftsAlertComponent {
  alertAircrafts$: Observable<Aircraft[]> | null = null;
  alertAircfrats$: Observable<any>;


  constructor(private store: Store<any>) {
    this.alertAircfrats$ = store.select(selectAlertAircrafts);
  }

  ngOnInit(): void {}
}

