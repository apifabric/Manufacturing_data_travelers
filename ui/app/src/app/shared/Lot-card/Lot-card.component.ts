import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Lot-card.component.html',
  styleUrls: ['./Lot-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Lot-card]': 'true'
  }
})

export class LotCardComponent {


}