import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';


const pagesRoutes: Routes = [
    {
        path: 'dashboard',
        component: PagesComponent,
        children: [
            {path: '', component: DashboardComponent, data: { titulo: 'Dashbord'} },
            {path: 'progress', component: ProgressComponent, data: { titulo: 'ProgressBar'} },
            {path: 'graficas1', component: Graficas1Component, data: { titulo: 'Graficas'} },
            {path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Temas'} },
            {path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas'} },
            {path: 'rxjs', component: RxjsComponent, data: { titulo: 'RXJS'} }
            
            
        ]
    }
];

export const PAGES_ROUTE = RouterModule.forChild( pagesRoutes );
