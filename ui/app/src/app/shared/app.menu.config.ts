import { MenuRootItem } from 'ontimize-web-ngx';

import { AdhesiveUsageCardComponent } from './AdhesiveUsage-card/AdhesiveUsage-card.component';

import { DefectCardComponent } from './Defect-card/Defect-card.component';

import { DeviceCardComponent } from './Device-card/Device-card.component';

import { DeviceAssemblyCardComponent } from './DeviceAssembly-card/DeviceAssembly-card.component';

import { EquipmentCardComponent } from './Equipment-card/Equipment-card.component';

import { InspectionCardComponent } from './Inspection-card/Inspection-card.component';

import { LotCardComponent } from './Lot-card/Lot-card.component';

import { ManufacturingStepCardComponent } from './ManufacturingStep-card/ManufacturingStep-card.component';

import { OperatorCardComponent } from './Operator-card/Operator-card.component';

import { PackagingCardComponent } from './Packaging-card/Packaging-card.component';

import { ReworkCardComponent } from './Rework-card/Rework-card.component';

import { ShipmentCardComponent } from './Shipment-card/Shipment-card.component';


export const MENU_CONFIG: MenuRootItem[] = [
    { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
    
    {
    id: 'data', name: ' data', icon: 'remove_red_eye', opened: true,
    items: [
    
        { id: 'AdhesiveUsage', name: 'ADHESIVEUSAGE', icon: 'view_list', route: '/main/AdhesiveUsage' }
    
        ,{ id: 'Defect', name: 'DEFECT', icon: 'view_list', route: '/main/Defect' }
    
        ,{ id: 'Device', name: 'DEVICE', icon: 'view_list', route: '/main/Device' }
    
        ,{ id: 'DeviceAssembly', name: 'DEVICEASSEMBLY', icon: 'view_list', route: '/main/DeviceAssembly' }
    
        ,{ id: 'Equipment', name: 'EQUIPMENT', icon: 'view_list', route: '/main/Equipment' }
    
        ,{ id: 'Inspection', name: 'INSPECTION', icon: 'view_list', route: '/main/Inspection' }
    
        ,{ id: 'Lot', name: 'LOT', icon: 'view_list', route: '/main/Lot' }
    
        ,{ id: 'ManufacturingStep', name: 'MANUFACTURINGSTEP', icon: 'view_list', route: '/main/ManufacturingStep' }
    
        ,{ id: 'Operator', name: 'OPERATOR', icon: 'view_list', route: '/main/Operator' }
    
        ,{ id: 'Packaging', name: 'PACKAGING', icon: 'view_list', route: '/main/Packaging' }
    
        ,{ id: 'Rework', name: 'REWORK', icon: 'view_list', route: '/main/Rework' }
    
        ,{ id: 'Shipment', name: 'SHIPMENT', icon: 'view_list', route: '/main/Shipment' }
    
    ] 
},
    
    { id: 'settings', name: 'Settings', icon: 'settings', route: '/main/settings'}
    ,{ id: 'about', name: 'About', icon: 'info', route: '/main/about'}
    ,{ id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];

export const MENU_COMPONENTS = [

    AdhesiveUsageCardComponent

    ,DefectCardComponent

    ,DeviceCardComponent

    ,DeviceAssemblyCardComponent

    ,EquipmentCardComponent

    ,InspectionCardComponent

    ,LotCardComponent

    ,ManufacturingStepCardComponent

    ,OperatorCardComponent

    ,PackagingCardComponent

    ,ReworkCardComponent

    ,ShipmentCardComponent

];