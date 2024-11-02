import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Packaging-card.component.html',
  styleUrls: ['./Packaging-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Packaging-card]': 'true'
  }
})

export class PackagingCardComponent {


}