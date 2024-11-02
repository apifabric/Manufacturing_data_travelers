import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {ADHESIVEUSAGE_MODULE_DECLARATIONS, AdhesiveUsageRoutingModule} from  './AdhesiveUsage-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    AdhesiveUsageRoutingModule
  ],
  declarations: ADHESIVEUSAGE_MODULE_DECLARATIONS,
  exports: ADHESIVEUSAGE_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AdhesiveUsageModule { }