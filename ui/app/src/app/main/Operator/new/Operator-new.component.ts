import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Operator-new',
  templateUrl: './Operator-new.component.html',
  styleUrls: ['./Operator-new.component.scss']
})
export class OperatorNewComponent {
  @ViewChild("OperatorForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}