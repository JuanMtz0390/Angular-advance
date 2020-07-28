import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

// RUTAS
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTE } from './pages.routes';

// COMPONENTES
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';


@NgModule({
   declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,

   ],
   exports: [
        ProgressComponent,
        Graficas1Component,
        PagesComponent
   ],
   imports: [
       FormsModule,
       SharedModule,
       PAGES_ROUTE
   ]
})

export class PagesModule { }
