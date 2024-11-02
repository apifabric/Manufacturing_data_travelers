import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'AdhesiveUsage-new',
  templateUrl: './AdhesiveUsage-new.component.html',
  styleUrls: ['./AdhesiveUsage-new.component.scss']
})
export class AdhesiveUsageNewComponent {
  @ViewChild("AdhesiveUsageForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}