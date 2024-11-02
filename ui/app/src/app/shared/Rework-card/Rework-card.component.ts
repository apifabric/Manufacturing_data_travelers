import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Rework-card.component.html',
  styleUrls: ['./Rework-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Rework-card]': 'true'
  }
})

export class ReworkCardComponent {


}