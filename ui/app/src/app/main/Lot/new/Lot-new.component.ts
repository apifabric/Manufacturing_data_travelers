import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Lot-new',
  templateUrl: './Lot-new.component.html',
  styleUrls: ['./Lot-new.component.scss']
})
export class LotNewComponent {
  @ViewChild("LotForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}