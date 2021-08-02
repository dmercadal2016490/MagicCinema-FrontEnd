import { Component, OnInit } from '@angular/core';
import { RestUserService } from 'src/app/services/restUser/rest-user.service';
import { CONNECTION } from 'src/app/services/global';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mi-reservacion',
  templateUrl: './mi-reservacion.component.html',
  styleUrls: ['./mi-reservacion.component.css']
})
export class MiReservacionComponent implements OnInit {

  constructor(private restUser:RestUserService, private router:Router) {
    this.uri = CONNECTION.URI;
  }

  ngOnInit(): void {
    this.user = this.restUser.getUser();
    this.token = this.restUser.getToken();
    this.reservaciones = localStorage.getItem('reservaciones');
    this.verReservaciones();
  }

  public uri:string;
  user;
  reservaciones;
  token;

  verReservaciones(){
    this.restUser.getReservaciones(this.user._id).subscribe((res:any)=>{
      if(res){
        this.reservaciones = res.reservaciones.reservaciones;
        localStorage.setItem('reservaciones', JSON.stringify(this.reservaciones));
      }
    })
  }

}
