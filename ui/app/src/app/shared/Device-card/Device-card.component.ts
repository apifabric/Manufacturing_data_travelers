import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Device-card.component.html',
  styleUrls: ['./Device-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Device-card]': 'true'
  }
})

export class DeviceCardComponent {


}