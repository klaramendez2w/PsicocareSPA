import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ActividadComponent } from './actividad/actividad.component';
import { HeaderComponent } from './header/header.component';
import { HomeactividadesComponent } from './homeactividades/homeactividades.component';
import { AboutComponent } from './about/about.component';
import { ProgressComponent } from './progress/progress.component';
import { NTestComponent } from './ntest/ntest.component';
import { PerfilComponent } from './perfil/perfil.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ConfigComponent } from './config/config.component';
import { HomeComponent } from './home/home.component';
import { ResultsComponent } from './results/results.component';
import { ChartsModule } from 'ng2-charts';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ActividadComponent,
    HeaderComponent,
    HomeactividadesComponent,
    AboutComponent,
    ProgressComponent,
    NTestComponent,
    PerfilComponent,
    WelcomeComponent,
    MenuComponent,
    ConfigComponent,
    HomeComponent,
    ResultsComponent
   
    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ChartsModule,
   
    
  ],
  providers: [],
  //En caso de error aqui habia usarioservice (arriba)
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
