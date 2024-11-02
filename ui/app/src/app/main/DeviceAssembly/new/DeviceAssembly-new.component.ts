import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'DeviceAssembly-new',
  templateUrl: './DeviceAssembly-new.component.html',
  styleUrls: ['./DeviceAssembly-new.component.scss']
})
export class DeviceAssemblyNewComponent {
  @ViewChild("DeviceAssemblyForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}