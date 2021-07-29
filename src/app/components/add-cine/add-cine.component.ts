import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cine } from 'src/app/models/cine';
import { RestCineService } from 'src/app/services/restCine/rest-cine.service';
import { RestUserService } from 'src/app/services/restUser/rest-user.service';

@Component({
  selector: 'app-add-cine',
  templateUrl: './add-cine.component.html',
  styleUrls: ['./add-cine.component.css']
})
export class AddCineComponent implements OnInit {

  cine: Cine;
  cines;
  public user;
  public token;
  admins;

  constructor(private restCine: RestCineService, private router: Router, private restUser: RestUserService) {
    this.user = this.restUser.getUser();
    this.token = this.restUser.getToken();
    this.cine = new Cine('','','','',[],null, null)
  }

  ngOnInit(): void {
    this.verAdmins();
    this.admins = localStorage.getItem('admins')
  }

  onSubmit(form){
    this.restCine.addCine(this.user._id, this.cine).subscribe((res:any)=>{
      if(res.cineSaved){
        alert(res.message);
        this.cine = new Cine('','','','',[],null, null)
        form.reset();
      }else{
        alert(res.message)
      }
    },error=> alert(error.error.message))
  }

  verAdmins(){
    this.restUser.getAdmins(this.user._id).subscribe((res:any)=>{
      if(res){
        this.admins = res.users
        localStorage.setItem('admins', JSON.stringify(this.admins))
        console.log(res.users)
      }else{
        alert(res.message)
      }
    },error=> alert(error.error.message))
  }
}
