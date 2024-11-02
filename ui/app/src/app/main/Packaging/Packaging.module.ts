import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {PACKAGING_MODULE_DECLARATIONS, PackagingRoutingModule} from  './Packaging-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    PackagingRoutingModule
  ],
  declarations: PACKAGING_MODULE_DECLARATIONS,
  exports: PACKAGING_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PackagingModule { }