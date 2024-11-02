import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './ManufacturingStep-card.component.html',
  styleUrls: ['./ManufacturingStep-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.ManufacturingStep-card]': 'true'
  }
})

export class ManufacturingStepCardComponent {


}