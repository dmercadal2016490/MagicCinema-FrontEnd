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

const routes: Routes = [
  {path:'', component:IndexComponent},
  {path:'index', component:IndexComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'home', component:HomeComponent},
  {path:'navbar', component:NavbarComponent},
  {path:'user', component:UserComponent},
  {path: 'addCine', component: AddCineComponent},
  {path: 'cinesHome', component: CinesHomeComponent},
  {path: 'saveUser', component: SaveUserComponent},
  {path:'cartelera', component:CarteleraComponent},
  {path:'golosinas', component:GolosinasComponent},
  {path:'addMovie', component:AddMovieComponent},
  {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
