import {  RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages/pages.component';

import { LoginComponent } from './auth/login.component';
import { RegisterComponent } from './auth/register.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';


const appRoutes: Routes = [

    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: '**', component: NopagefoundComponent}

];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true} );
