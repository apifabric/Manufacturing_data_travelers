import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Inspection-new',
  templateUrl: './Inspection-new.component.html',
  styleUrls: ['./Inspection-new.component.scss']
})
export class InspectionNewComponent {
  @ViewChild("InspectionForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}