import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LotHomeComponent } from './home/Lot-home.component';
import { LotNewComponent } from './new/Lot-new.component';
import { LotDetailComponent } from './detail/Lot-detail.component';

const routes: Routes = [
  {path: '', component: LotHomeComponent},
  { path: 'new', component: LotNewComponent },
  { path: ':id', component: LotDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Lot-detail-permissions'
      }
    }
  },{
    path: ':lot_id/AdhesiveUsage', loadChildren: () => import('../AdhesiveUsage/AdhesiveUsage.module').then(m => m.AdhesiveUsageModule),
    data: {
        oPermission: {
            permissionId: 'AdhesiveUsage-detail-permissions'
        }
    }
}
];

export const LOT_MODULE_DECLARATIONS = [
    LotHomeComponent,
    LotNewComponent,
    LotDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LotRoutingModule { }