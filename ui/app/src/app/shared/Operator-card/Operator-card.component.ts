import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Operator-card.component.html',
  styleUrls: ['./Operator-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Operator-card]': 'true'
  }
})

export class OperatorCardComponent {


}