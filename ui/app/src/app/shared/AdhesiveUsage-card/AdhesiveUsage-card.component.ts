import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './AdhesiveUsage-card.component.html',
  styleUrls: ['./AdhesiveUsage-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.AdhesiveUsage-card]': 'true'
  }
})

export class AdhesiveUsageCardComponent {


}