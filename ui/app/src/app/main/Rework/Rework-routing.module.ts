import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReworkHomeComponent } from './home/Rework-home.component';
import { ReworkNewComponent } from './new/Rework-new.component';
import { ReworkDetailComponent } from './detail/Rework-detail.component';

const routes: Routes = [
  {path: '', component: ReworkHomeComponent},
  { path: 'new', component: ReworkNewComponent },
  { path: ':id', component: ReworkDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Rework-detail-permissions'
      }
    }
  }
];

export const REWORK_MODULE_DECLARATIONS = [
    ReworkHomeComponent,
    ReworkNewComponent,
    ReworkDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReworkRoutingModule { }