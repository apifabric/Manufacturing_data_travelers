import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefectHomeComponent } from './home/Defect-home.component';
import { DefectNewComponent } from './new/Defect-new.component';
import { DefectDetailComponent } from './detail/Defect-detail.component';

const routes: Routes = [
  {path: '', component: DefectHomeComponent},
  { path: 'new', component: DefectNewComponent },
  { path: ':id', component: DefectDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Defect-detail-permissions'
      }
    }
  }
];

export const DEFECT_MODULE_DECLARATIONS = [
    DefectHomeComponent,
    DefectNewComponent,
    DefectDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefectRoutingModule { }