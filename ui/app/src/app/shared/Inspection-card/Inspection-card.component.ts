import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Inspection-card.component.html',
  styleUrls: ['./Inspection-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Inspection-card]': 'true'
  }
})

export class InspectionCardComponent {


}