import { Component, OnInit } from '@angular/core';
import { Golosina } from 'src/app/models/golosina';
import { RestUserService } from 'src/app/services/restUser/rest-user.service';
import { RestCineService } from 'src/app/services/restCine/rest-cine.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-golosina',
  templateUrl: './add-golosina.component.html',
  styleUrls: ['./add-golosina.component.css']
})
export class AddGolosinaComponent implements OnInit {
  user;
  golosina;
  cineSelected;
  cines;

  constructor(private restUser:RestUserService, private rrestCine:RestCineService, private router:Router) { }

  ngOnInit(): void {
    this.user = this.restUser.getUser();
    this.golosina = new Golosina('','','',null,'');
    this.cineSelected = JSON.parse(localStorage.getItem('cineSelected'));
  }

  onSubmit(){
    this.rrestCine.addGolosina(this.user._id, this.cineSelected._id,this.golosina).subscribe((res:any)=>{
      if(res.cinePushed){
        alert(res.message);
        localStorage.setItem('cineSelected', JSON.stringify(res.cinePushed));
        this.router.navigateByUrl('golosinas');
      }else{
        alert(res.message);
        this.router.navigateByUrl('golosinas')
      }
    },
    error=> alert(error.error.message)
    )
  }

}
