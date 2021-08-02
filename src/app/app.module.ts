//Modulos
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

//Componentes
import { AppComponent } from './app.component';
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

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    HomeComponent,
    NavbarComponent,
    UserComponent,
    AddCineComponent,
    CinesHomeComponent,
    SaveUserComponent,
    CarteleraComponent,
    GolosinasComponent,
    AddMovieComponent,
    ReservacionComponent,
    AddGolosinaComponent,
    MiReservacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
