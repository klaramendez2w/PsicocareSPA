import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { ConfigComponent } from './config/config.component';

const routes: Routes = [
  { path: "login", component:LoginComponent , pathMatch: "full" },
  { path: "homeactivities/activity/:aid", component: ActividadComponent, pathMatch: "full", },
  { path: "header", component: HeaderComponent, pathMatch: "full" },
  { path: "homeactivities/:id", component: HomeactividadesComponent, pathMatch: "full" },
  { path: "about", component: AboutComponent, pathMatch: "full" },
  { path: "test", component: TestComponent, pathMatch: "full" },
  { path: "progress", component: ProgressComponent, pathMatch: "full" },
  { path: "perfil", component: PerfilComponent, pathMatch: "full" },
  { path: "welcome", component: WelcomeComponent, pathMatch: "full" },
  { path: "menu", component: MenuComponent, pathMatch: "full" },
  { path: "config", component: ConfigComponent, pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
