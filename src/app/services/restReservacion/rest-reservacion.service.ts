import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { CONNECTION } from '../global'
import { map } from 'rxjs/operators';
import { RestUserService } from '../restUser/rest-user.service';

@Injectable({
  providedIn: 'root'
})
export class RestReservacionService {
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

  reservar(idUser, idAsiento, reservar){
    let params = JSON.stringify(reservar);
    return this.http.put(this.uri+idUser+'/reservarAsiento/'+idAsiento,params,this.httpOptionsAuth)
      .pipe(map(this.extractData))
  }
}
