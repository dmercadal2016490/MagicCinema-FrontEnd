import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cine } from 'src/app/models/cine';
import { RestCineService } from 'src/app/services/restCine/rest-cine.service';
import { RestUserService } from 'src/app/services/restUser/rest-user.service';

@Component({
  selector: 'app-cines-home',
  templateUrl: './cines-home.component.html',
  styleUrls: ['./cines-home.component.css']
})
export class CinesHomeComponent implements OnInit {

  constructor(private restCine: RestCineService, private router: Router, private restUser: RestUserService) { 
    this.user = this.restUser.getUser();
    this.token = this.restUser.getToken();
    this.cine = new Cine('','','',[],null, null)
  }

  public user;
  public token;
  cine: Cine;
  cines;

  ngOnInit(): void {

    this.cines = localStorage.getItem('cines')
    this.verCines();
  }

  verCines(){
    this.restCine.getCines().subscribe((res: any)=>{
      if(res){
        this.cines = res.cines;
        localStorage.setItem('cines', JSON.stringify(this.cines))
        console.log(this.cines)
      }else{
        alert(res.message)
      }
    })
  }

  obtenerData(cineSelected){
    this.cine = cineSelected;
    localStorage.setItem('cineSelected', JSON.stringify(this.cine))
  }

}
