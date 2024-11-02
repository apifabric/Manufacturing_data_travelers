import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './DeviceAssembly-card.component.html',
  styleUrls: ['./DeviceAssembly-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.DeviceAssembly-card]': 'true'
  }
})

export class DeviceAssemblyCardComponent {


}