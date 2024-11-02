import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManufacturingStepHomeComponent } from './home/ManufacturingStep-home.component';
import { ManufacturingStepNewComponent } from './new/ManufacturingStep-new.component';
import { ManufacturingStepDetailComponent } from './detail/ManufacturingStep-detail.component';

const routes: Routes = [
  {path: '', component: ManufacturingStepHomeComponent},
  { path: 'new', component: ManufacturingStepNewComponent },
  { path: ':id', component: ManufacturingStepDetailComponent,
    data: {
      oPermission: {
        permissionId: 'ManufacturingStep-detail-permissions'
      }
    }
  },{
    path: ':step_id/DeviceAssembly', loadChildren: () => import('../DeviceAssembly/DeviceAssembly.module').then(m => m.DeviceAssemblyModule),
    data: {
        oPermission: {
            permissionId: 'DeviceAssembly-detail-permissions'
        }
    }
}
];

export const MANUFACTURINGSTEP_MODULE_DECLARATIONS = [
    ManufacturingStepHomeComponent,
    ManufacturingStepNewComponent,
    ManufacturingStepDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManufacturingStepRoutingModule { }