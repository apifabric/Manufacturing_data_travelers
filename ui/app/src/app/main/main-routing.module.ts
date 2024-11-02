import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
        { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
      
    
        { path: 'AdhesiveUsage', loadChildren: () => import('./AdhesiveUsage/AdhesiveUsage.module').then(m => m.AdhesiveUsageModule) },
    
        { path: 'Defect', loadChildren: () => import('./Defect/Defect.module').then(m => m.DefectModule) },
    
        { path: 'Device', loadChildren: () => import('./Device/Device.module').then(m => m.DeviceModule) },
    
        { path: 'DeviceAssembly', loadChildren: () => import('./DeviceAssembly/DeviceAssembly.module').then(m => m.DeviceAssemblyModule) },
    
        { path: 'Equipment', loadChildren: () => import('./Equipment/Equipment.module').then(m => m.EquipmentModule) },
    
        { path: 'Inspection', loadChildren: () => import('./Inspection/Inspection.module').then(m => m.InspectionModule) },
    
        { path: 'Lot', loadChildren: () => import('./Lot/Lot.module').then(m => m.LotModule) },
    
        { path: 'ManufacturingStep', loadChildren: () => import('./ManufacturingStep/ManufacturingStep.module').then(m => m.ManufacturingStepModule) },
    
        { path: 'Operator', loadChildren: () => import('./Operator/Operator.module').then(m => m.OperatorModule) },
    
        { path: 'Packaging', loadChildren: () => import('./Packaging/Packaging.module').then(m => m.PackagingModule) },
    
        { path: 'Rework', loadChildren: () => import('./Rework/Rework.module').then(m => m.ReworkModule) },
    
        { path: 'Shipment', loadChildren: () => import('./Shipment/Shipment.module').then(m => m.ShipmentModule) },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }