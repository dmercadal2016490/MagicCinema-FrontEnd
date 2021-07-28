import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { CONNECTION } from '../global'
import { map } from 'rxjs/operators';
import { RestUserService } from '../restUser/rest-user.service';

@Injectable({
  providedIn: 'root'
})
export class RestCineService {

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
}
