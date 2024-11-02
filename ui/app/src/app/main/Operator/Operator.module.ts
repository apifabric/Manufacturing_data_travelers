import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {OPERATOR_MODULE_DECLARATIONS, OperatorRoutingModule} from  './Operator-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    OperatorRoutingModule
  ],
  declarations: OPERATOR_MODULE_DECLARATIONS,
  exports: OPERATOR_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OperatorModule { }