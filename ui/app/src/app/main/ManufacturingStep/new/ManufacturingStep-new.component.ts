import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'ManufacturingStep-new',
  templateUrl: './ManufacturingStep-new.component.html',
  styleUrls: ['./ManufacturingStep-new.component.scss']
})
export class ManufacturingStepNewComponent {
  @ViewChild("ManufacturingStepForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}