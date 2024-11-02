import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PackagingHomeComponent } from './home/Packaging-home.component';
import { PackagingNewComponent } from './new/Packaging-new.component';
import { PackagingDetailComponent } from './detail/Packaging-detail.component';

const routes: Routes = [
  {path: '', component: PackagingHomeComponent},
  { path: 'new', component: PackagingNewComponent },
  { path: ':id', component: PackagingDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Packaging-detail-permissions'
      }
    }
  },{
    path: ':packaging_id/Shipment', loadChildren: () => import('../Shipment/Shipment.module').then(m => m.ShipmentModule),
    data: {
        oPermission: {
            permissionId: 'Shipment-detail-permissions'
        }
    }
}
];

export const PACKAGING_MODULE_DECLARATIONS = [
    PackagingHomeComponent,
    PackagingNewComponent,
    PackagingDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PackagingRoutingModule { }