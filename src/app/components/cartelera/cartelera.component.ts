import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';
import { Cine } from 'src/app/models/cine';
import { CONNECTION } from 'src/app/services/global';
import { ResourceLoader } from '@angular/compiler';
import { RestCineService } from 'src/app/services/restCine/rest-cine.service';

@Component({
  selector: 'app-cartelera',
  templateUrl: './cartelera.component.html',
  styleUrls: ['./cartelera.component.css']
})
export class CarteleraComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
