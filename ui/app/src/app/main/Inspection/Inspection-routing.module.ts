import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InspectionHomeComponent } from './home/Inspection-home.component';
import { InspectionNewComponent } from './new/Inspection-new.component';
import { InspectionDetailComponent } from './detail/Inspection-detail.component';

const routes: Routes = [
  {path: '', component: InspectionHomeComponent},
  { path: 'new', component: InspectionNewComponent },
  { path: ':id', component: InspectionDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Inspection-detail-permissions'
      }
    }
  },{
    path: ':inspection_id/Defect', loadChildren: () => import('../Defect/Defect.module').then(m => m.DefectModule),
    data: {
        oPermission: {
            permissionId: 'Defect-detail-permissions'
        }
    }
}
];

export const INSPECTION_MODULE_DECLARATIONS = [
    InspectionHomeComponent,
    InspectionNewComponent,
    InspectionDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InspectionRoutingModule { }