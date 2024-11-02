import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdhesiveUsageHomeComponent } from './home/AdhesiveUsage-home.component';
import { AdhesiveUsageNewComponent } from './new/AdhesiveUsage-new.component';
import { AdhesiveUsageDetailComponent } from './detail/AdhesiveUsage-detail.component';

const routes: Routes = [
  {path: '', component: AdhesiveUsageHomeComponent},
  { path: 'new', component: AdhesiveUsageNewComponent },
  { path: ':id', component: AdhesiveUsageDetailComponent,
    data: {
      oPermission: {
        permissionId: 'AdhesiveUsage-detail-permissions'
      }
    }
  }
];

export const ADHESIVEUSAGE_MODULE_DECLARATIONS = [
    AdhesiveUsageHomeComponent,
    AdhesiveUsageNewComponent,
    AdhesiveUsageDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdhesiveUsageRoutingModule { }