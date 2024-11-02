import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeviceAssemblyHomeComponent } from './home/DeviceAssembly-home.component';
import { DeviceAssemblyNewComponent } from './new/DeviceAssembly-new.component';
import { DeviceAssemblyDetailComponent } from './detail/DeviceAssembly-detail.component';

const routes: Routes = [
  {path: '', component: DeviceAssemblyHomeComponent},
  { path: 'new', component: DeviceAssemblyNewComponent },
  { path: ':id', component: DeviceAssemblyDetailComponent,
    data: {
      oPermission: {
        permissionId: 'DeviceAssembly-detail-permissions'
      }
    }
  },{
    path: ':device_assembly_id/AdhesiveUsage', loadChildren: () => import('../AdhesiveUsage/AdhesiveUsage.module').then(m => m.AdhesiveUsageModule),
    data: {
        oPermission: {
            permissionId: 'AdhesiveUsage-detail-permissions'
        }
    }
}
];

export const DEVICEASSEMBLY_MODULE_DECLARATIONS = [
    DeviceAssemblyHomeComponent,
    DeviceAssemblyNewComponent,
    DeviceAssemblyDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeviceAssemblyRoutingModule { }