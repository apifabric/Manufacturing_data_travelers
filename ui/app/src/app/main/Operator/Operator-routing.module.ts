import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperatorHomeComponent } from './home/Operator-home.component';
import { OperatorNewComponent } from './new/Operator-new.component';
import { OperatorDetailComponent } from './detail/Operator-detail.component';

const routes: Routes = [
  {path: '', component: OperatorHomeComponent},
  { path: 'new', component: OperatorNewComponent },
  { path: ':id', component: OperatorDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Operator-detail-permissions'
      }
    }
  },{
    path: ':operator_id/DeviceAssembly', loadChildren: () => import('../DeviceAssembly/DeviceAssembly.module').then(m => m.DeviceAssemblyModule),
    data: {
        oPermission: {
            permissionId: 'DeviceAssembly-detail-permissions'
        }
    }
},{
    path: ':operator_id/Rework', loadChildren: () => import('../Rework/Rework.module').then(m => m.ReworkModule),
    data: {
        oPermission: {
            permissionId: 'Rework-detail-permissions'
        }
    }
}
];

export const OPERATOR_MODULE_DECLARATIONS = [
    OperatorHomeComponent,
    OperatorNewComponent,
    OperatorDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperatorRoutingModule { }