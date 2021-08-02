import { Component, OnInit } from '@angular/core';
import { CONNECTION } from 'src/app/services/global';
import { RestMovieService } from 'src/app/services/restMovie/rest-movie.service';
import { RestUserService } from 'src/app/services/restUser/rest-user.service';
import { RestReservacionService } from 'src/app/services/restReservacion/rest-reservacion.service';
import { Router } from '@angular/router';
import { Asiento } from 'src/app/models/asiento';
import { Reservacion } from 'src/app/models/reservacion';

@Component({
  selector: 'app-reservacion',
  templateUrl: './reservacion.component.html',
  styleUrls: ['./reservacion.component.css']
})
export class ReservacionComponent implements OnInit {
  movie;
  uri;
  user;
  asientos;
  asiento;
  asientoSelected;
  reservacion;

  constructor(private restUser: RestUserService, private restMovie: RestMovieService, private route: Router, private restReservacion: RestReservacionService) {
    this.movie = JSON.parse(localStorage.getItem('movieSelected'));
    this.uri = CONNECTION.URI;
    this.user = this.restUser.getUser();
    this.asiento = new Asiento('','','')
    this.asientoSelected = JSON.parse(localStorage.getItem('asientoSelected'))
    this.reservacion = new Reservacion('',null,null,[])
  }

  ngOnInit(): void {
    this.verAsientos();
  }

  onSubmit(){
    this.restReservacion.reservar(this.user._id, this.asiento._id, this.reservacion).subscribe((res:any)=>{
      if(res.userPush){
        alert(res.message);
        localStorage.setItem('user', JSON.stringify(res.userPush))
        this.route.navigateByUrl('cartelera');
      }else{
        alert(res.message);
        this.route.navigateByUrl('miReservacion');
      }
    },error=> alert(error.error.message))
  }

  verAsientos(){
    this.restMovie.verAsientos(this.movie._id).subscribe((res:any)=>{
      if(res){
        this.asientos = res.asientos.asientos
        localStorage.setItem('asientos', JSON.stringify(this.asientos));
      }else{
        alert(res.message);
      }
    })
  }

  obtenerData(asientoSelected){
    this.asiento = asientoSelected;
    localStorage.setItem('asientoSelected', JSON.stringify(asientoSelected));
  }

}
