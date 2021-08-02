import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { CONNECTION } from '../global'
import { map } from 'rxjs/operators';
import { RestUserService } from '../restUser/rest-user.service';

@Injectable({
  providedIn: 'root'
})
export class RestCineService {
  cine;
  golosina;

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
  };

  constructor(private restUser: RestUserService, private http: HttpClient) {
    this.uri = CONNECTION.URI;
  }

  private extractData(res: Response){
    let body = res;
    return body || [] || {};
  }

  addCine(idAdmin,cine){
    let params = JSON.stringify(cine);
    return this.http.post(this.uri + idAdmin + '/addCine', params, this.httpOptionsAuth)
    .pipe(map(this.extractData))
  }

  getCines(){
    return this.http.get(this.uri + 'getCines', this.httpOptionsAuth)
    .pipe(map(this.extractData))
  }

  updateCine(idAdmin,cineActualizar){
    let params = JSON.stringify(cineActualizar)
    return this.http.put(this.uri+idAdmin+'/updateCine/'+cineActualizar._id, params, this.httpOptionsAuth)
    .pipe(map(this.extractData))
  }

  deleteCine(idAdmin, idCine){
    return this.http.delete(this.uri+idAdmin+'/deleteCine/'+idCine, this.httpOptionsAuth)
    .pipe(map(this.extractData))
  }

  verMovies(idCine){
    return this.http.get(this.uri+'/getMoviees/'+idCine,this.httpOptions)
    .pipe(map(this.extractData))
  }

  verGolosinas(idCine){
    return this.http.get(this.uri+'/getGolosinas/'+idCine,this.httpOptions)
    .pipe(map(this.extractData))
  }

  getCine(){
    let cine = JSON.parse(localStorage.getItem('cineSelected'));
    if(cine != undefined || cine != null){
      this.cine = cine;
    }else{
      this.cine = null
    }
    return this.cine;
  }

  getGolosina(){
    let golosina = JSON.parse(localStorage.getItem('golosinaSelected'));
    if(golosina != undefined || golosina != null){
      this.golosina = golosina;
    }else{
      this.golosina = null
    }
    return this.golosina;
  }

  addGolosina(idUser, idCine, golosina){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.restUser.getToken()
    })
    let params = JSON.stringify(golosina);
    return this.http.put(this.uri+idUser+'/addGolosina/'+idCine,params,{headers:headers})
      .pipe(map(this.extractData))
  }
}
