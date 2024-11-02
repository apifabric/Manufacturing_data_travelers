import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {MANUFACTURINGSTEP_MODULE_DECLARATIONS, ManufacturingStepRoutingModule} from  './ManufacturingStep-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    ManufacturingStepRoutingModule
  ],
  declarations: MANUFACTURINGSTEP_MODULE_DECLARATIONS,
  exports: MANUFACTURINGSTEP_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ManufacturingStepModule { }