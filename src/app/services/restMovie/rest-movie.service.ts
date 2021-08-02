import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { CONNECTION } from '../global'
import { map } from 'rxjs/operators';
import { RestUserService } from '../restUser/rest-user.service';

@Injectable({
  providedIn: 'root'
})
export class RestMovieService {
  public uri:string
  public httpOptions ={
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };
  
  public httpOptionsAuth ={
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization' : this.restUser.getToken()
    })
  }

  constructor(private restUser:RestUserService, private http: HttpClient) {
    this.uri = CONNECTION.URI;
  }

  private extractData(res:Response){
    let body = res;
    return body || [] || {}
  }

  saveMovie(idUser, idCine, movie){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.restUser.getToken()
    })
    let params = JSON.stringify(movie);
    return this.http.put(this.uri+idUser+'/addMovie/'+idCine,params,{headers:headers})
      .pipe(map(this.extractData))
  }

  updateMovie(idUser, idCine,idPelicula,movie){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.restUser.getToken()
    })
    let params = JSON.stringify(movie);
    return this.http.put(this.uri+idUser+'/updateMovie/'+idCine+'/'+idPelicula,params,{headers:headers})
    .pipe(map(this.extractData))
  }

  deleteMovie(idUser, idCine,idPelicula){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.restUser.getToken()
    })
    return this.http.delete(this.uri+idUser+'/deleteMovie/'+idCine+'/'+idPelicula,{headers:headers})
    .pipe(map(this.extractData))
  }

  verAsientos(idPelicula){
    return this.http.get(this.uri+'getAsientos/'+idPelicula, this.httpOptionsAuth)
  }
}
