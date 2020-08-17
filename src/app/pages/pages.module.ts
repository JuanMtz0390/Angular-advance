import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'


// MODULOS RUTAS
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTE } from './pages.routes';
import { ComponentsModule } from '../components/components.module'



// COMPONENTES
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';


@NgModule({
declarations: [
     PagesComponent,
     DashboardComponent,
     ProgressComponent,
     Graficas1Component,
     AccountSettingsComponent,

],
exports: [
     ProgressComponent,
     Graficas1Component,
     PagesComponent,
     AccountSettingsComponent
],
imports: [
     FormsModule,
     SharedModule,
     PAGES_ROUTE,
     ComponentsModule
]
})

export class PagesModule { }
