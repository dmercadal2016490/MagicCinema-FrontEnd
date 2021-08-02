import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';
import { Cine } from 'src/app/models/cine';
import { CONNECTION } from 'src/app/services/global';
import { ResourceLoader } from '@angular/compiler';
import { RestCineService } from 'src/app/services/restCine/rest-cine.service';
import { RestMovieService } from 'src/app/services/restMovie/rest-movie.service';
import { Router } from '@angular/router';
import { RestUserService } from 'src/app/services/restUser/rest-user.service';
import { UploadImageService } from 'src/app/services/uploadImage/upload-image.service';


@Component({
  selector: 'app-cartelera',
  templateUrl: './cartelera.component.html',
  styleUrls: ['./cartelera.component.css']
})
export class CarteleraComponent implements OnInit {

  constructor(private restCine:RestCineService, private router:Router, private restUser:RestUserService, private uploadImage:UploadImageService, private restMovie:RestMovieService) {
    this.uri = CONNECTION.URI;
    this.user = this.restUser.getUser;
  }

  peliculas;
  pelicula:Pelicula;
  cine;
  cineso;
  cineSelected:Cine;
  movieSelected:Pelicula;
  public filesToUpload:Array<File>;
  public token;
  message;
  public uri:string;
  user;
  public opciones = ['Accion', 'Drama', 'Terror', 'Fantasia', 'Comedia', 'Musical'];
  public opciones2 = ['AA', 'A', 'B', 'B15', 'C', 'D'];
  public opciones3 = ['Disponible', 'Gran estreno', 'Proximamente'];
  


  ngOnInit(): void {
    this.cine = this.restCine.getCine();
    this.cineSelected = JSON.parse(localStorage.getItem('cineSelected'));
    this.movieSelected = JSON.parse(localStorage.getItem('movieSelected'));
    this.peliculas = localStorage.getItem('peliculas');
    this.verMovies();
    this.pelicula = new Pelicula('','','','','','',null,'','',[]);
    this.user = this.restUser.getUser();
    this.token = this.restUser.getToken();
  }

  verMovies(){
    this.restCine.verMovies(this.cine._id).subscribe((res:any)=>{
      if(res){
        this.peliculas = res.peliculas.peliculas
        localStorage.setItem('peliculas', JSON.stringify(this.peliculas));
      }else{
        alert(res.message);
      }
    })
  }

  obtenerData(movieSelected){
    this.pelicula = movieSelected;
    localStorage.setItem('movieSelected', JSON.stringify(movieSelected));
    console.log(movieSelected)
  }

  uploadImageMovie(){
    this.uploadImage.fileRequesMovie(this.user._id, this.pelicula._id,[], this.filesToUpload,this.token,'image')
      .then((res:any)=>{
        if(res.pelicula){
          this.pelicula.image = res.peliculaImage;
          localStorage.setItem('movieSelected', JSON.stringify(this.movieSelected))
          alert('imagen de pelicula subida con exito');
        }else{
          alert(res.message)
        }
      },
      (error:any) => alert('Error al subir la imagen' + error)
      )
  }

  fileChange(fileInput){
    this.filesToUpload = <Array<File>>fileInput.target.files;
    console.log(this.filesToUpload)
  }
  
  updateMvoie(){
    this.restMovie.updateMovie(this.user._id, this.cine._id, this.pelicula._id,this.pelicula).subscribe((res:any)=>{
      if(res.movieUpdated){
        alert(res.message);
        localStorage.setItem('movieSelected', JSON.stringify(res.movieUpdated));
      }else{
        alert('No se actualizo la pelicula')
      }
    },
    error=> alert(error.error.message)
    )
  }

  deleteMovie(){
    this.restMovie.deleteMovie(this.user._id, this.cine._id, this.pelicula._id).subscribe((res:any)=>{
      if(res.movieRemoved){
        alert(res.message);
        localStorage.removeItem('movieSelected');
      }else{
        alert('Pelicula Eliminada');
        localStorage.removeItem('movieSelected');
      }
    },
    error=> alert(error.error.message)
    )
  }


}
