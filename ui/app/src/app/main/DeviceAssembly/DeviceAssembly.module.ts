import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {DEVICEASSEMBLY_MODULE_DECLARATIONS, DeviceAssemblyRoutingModule} from  './DeviceAssembly-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    DeviceAssemblyRoutingModule
  ],
  declarations: DEVICEASSEMBLY_MODULE_DECLARATIONS,
  exports: DEVICEASSEMBLY_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DeviceAssemblyModule { }