import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ActividadComponent } from './actividad/actividad.component';
import { HeaderComponent } from './header/header.component';
import { HomeactividadesComponent } from './homeactividades/homeactividades.component';
import { AboutComponent } from './about/about.component';
import { ProgressComponent } from './progress/progress.component';
import { TestComponent } from './test/test.component';
import { PerfilComponent } from './perfil/perfil.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ConfigComponent } from './config/config.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ActividadComponent,
    HeaderComponent,
    HomeactividadesComponent,
    AboutComponent,
    ProgressComponent,
    TestComponent,
    PerfilComponent,
    WelcomeComponent,
    MenuComponent,
    ConfigComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
