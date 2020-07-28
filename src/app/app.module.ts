import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// RUTAS
import { APP_ROUTES } from './app.routes';

// MODULOS
import { PagesModule } from './pages/pages.module';
import { AuthRoutingModule } from './auth/auth.route';

// COMPONENTES
import { AppComponent } from './app.component';

//path: '/dashboard' PagesModule
//path: '/auth' AuthRoutinnM



@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    AuthRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
