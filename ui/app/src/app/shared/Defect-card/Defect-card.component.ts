import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Defect-card.component.html',
  styleUrls: ['./Defect-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Defect-card]': 'true'
  }
})

export class DefectCardComponent {


}