import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserComponent } from './components/user/user.component';
import { AddCineComponent } from './components/add-cine/add-cine.component';
import { CinesHomeComponent } from './components/cines-home/cines-home.component';
import { SaveUserComponent } from './components/save-user/save-user.component';
import { CarteleraComponent } from './components/cartelera/cartelera.component';
import { GolosinasComponent } from './components/golosinas/golosinas.component';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { ReservacionComponent } from './components/reservacion/reservacion.component';
import { AddGolosinaComponent } from './components/add-golosina/add-golosina.component';
import { MiReservacionComponent } from './components/mi-reservacion/mi-reservacion.component';
import { LoggedGuardGuard } from './guards/logged-guard.guard';
import { LoggedoutGuardGuard } from './guards/loggedout-guard.guard';
import { AdminGuardGuard } from './guards/admin-guard.guard';
import { AdminCineGuardGuard } from './guards/admin-cine-guard.guard';

const routes: Routes = [
  {path:'', component:IndexComponent},
  {path:'index',canActivate:[LoggedoutGuardGuard], component:IndexComponent},
  {path:'login',canActivate:[LoggedoutGuardGuard], component:LoginComponent},
  {path:'register',canActivate:[LoggedoutGuardGuard], component:RegisterComponent},
  {path:'home',canActivate:[LoggedGuardGuard], component:HomeComponent},
  {path:'navbar',canActivate:[LoggedGuardGuard], component:NavbarComponent},
  {path:'user',canActivate:[LoggedGuardGuard], component:UserComponent},
  {path: 'addCine',canActivate:[AdminGuardGuard], component: AddCineComponent},
  {path: 'cinesHome',canActivate:[LoggedGuardGuard], component: CinesHomeComponent},
  {path: 'saveUser',canActivate:[AdminGuardGuard], component: SaveUserComponent},
  {path:'cartelera',canActivate:[LoggedGuardGuard], component:CarteleraComponent},
  {path:'golosinas',canActivate:[LoggedGuardGuard], component:GolosinasComponent},
  {path:'addMovie',canActivate:[AdminCineGuardGuard] ,component:AddMovieComponent},
  {path:'addGolosina', canActivate:[AdminCineGuardGuard], component:AddGolosinaComponent},
  {path:'miReservacion', canActivate:[LoggedGuardGuard], component: MiReservacionComponent},
  {path:'reservacion',canActivate:[LoggedGuardGuard], component:ReservacionComponent},
  {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
