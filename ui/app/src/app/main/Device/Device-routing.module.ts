import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeviceHomeComponent } from './home/Device-home.component';
import { DeviceNewComponent } from './new/Device-new.component';
import { DeviceDetailComponent } from './detail/Device-detail.component';

const routes: Routes = [
  {path: '', component: DeviceHomeComponent},
  { path: 'new', component: DeviceNewComponent },
  { path: ':id', component: DeviceDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Device-detail-permissions'
      }
    }
  },{
    path: ':device_id/DeviceAssembly', loadChildren: () => import('../DeviceAssembly/DeviceAssembly.module').then(m => m.DeviceAssemblyModule),
    data: {
        oPermission: {
            permissionId: 'DeviceAssembly-detail-permissions'
        }
    }
},{
    path: ':device_id/Inspection', loadChildren: () => import('../Inspection/Inspection.module').then(m => m.InspectionModule),
    data: {
        oPermission: {
            permissionId: 'Inspection-detail-permissions'
        }
    }
},{
    path: ':device_id/Packaging', loadChildren: () => import('../Packaging/Packaging.module').then(m => m.PackagingModule),
    data: {
        oPermission: {
            permissionId: 'Packaging-detail-permissions'
        }
    }
},{
    path: ':device_id/Rework', loadChildren: () => import('../Rework/Rework.module').then(m => m.ReworkModule),
    data: {
        oPermission: {
            permissionId: 'Rework-detail-permissions'
        }
    }
}
];

export const DEVICE_MODULE_DECLARATIONS = [
    DeviceHomeComponent,
    DeviceNewComponent,
    DeviceDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeviceRoutingModule { }