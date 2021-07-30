import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';
import { RestUserService } from 'src/app/services/restUser/rest-user.service';
import { RestMovieService } from 'src/app/services/restMovie/rest-movie.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  user;
  movie;
  cineSelected;
  cines;
  public opciones = ['Accion', 'Drama', 'Terror', 'Fantasia', 'Comedia', 'Musical'];
  public opciones2 = ['AA', 'A', 'B', 'B15', 'C', 'D'];
  public opciones3 = ['Disponible', 'Gran estreno', 'Proximamente'];

  constructor(private restUser:RestUserService, private restMovie:RestMovieService, private router:Router) { }

  ngOnInit(): void {
    this.user = this.restUser.getUser();
    this.movie = new Pelicula('','','','','','','','',[]);
    this.cineSelected = JSON.parse(localStorage.getItem('cineSelected'));
  }

  onSubmit(){
    this.restMovie.saveMovie(this.user._id, this.cineSelected._id,this.movie).subscribe((res:any)=>{
      if(res.cinePushed){
        alert(res.message);
        localStorage.setItem('cineSelected', JSON.stringify(res.cinePushed));
        this.router.navigateByUrl('cartelera');
      }else{
        alert(res.message);
      }
    },
    error=> alert(error.error.message)
    )
  }

}
