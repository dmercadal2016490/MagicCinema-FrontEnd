import { Component, OnInit } from '@angular/core';
import { CONNECTION } from 'src/app/services/global';

@Component({
  selector: 'app-reservacion',
  templateUrl: './reservacion.component.html',
  styleUrls: ['./reservacion.component.css']
})
export class ReservacionComponent implements OnInit {
  movie;
  uri;

  constructor() {
    this.movie = JSON.parse(localStorage.getItem('movieSelected'));
    this.uri = CONNECTION.URI;
  }

  ngOnInit(): void {
  }

}
