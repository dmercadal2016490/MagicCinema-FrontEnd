import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cine } from 'src/app/models/cine';
import { RestCineService } from 'src/app/services/restCine/rest-cine.service';
import { RestUserService } from 'src/app/services/restUser/rest-user.service';

import { UploadImageService } from 'src/app/services/uploadImage/upload-image.service';
import { CONNECTION } from 'src/app/services/global';

@Component({
  selector: 'app-cines-home',
  templateUrl: './cines-home.component.html',
  styleUrls: ['./cines-home.component.css']
})
export class CinesHomeComponent implements OnInit {

  constructor(private restCine: RestCineService, private router: Router, private restUser: RestUserService, private uploadImage:UploadImageService) { 
    this.user = this.restUser.getUser();
    this.token = this.restUser.getToken();
    this.cine = new Cine('','','','',[],null, null);
    this.uri = CONNECTION.URI
  }

  public user;
  public token;
  cine: Cine;
  cines;
  public filesToUpload:Array<File>;
  public uri:string;
  cineSelected;

  ngOnInit(): void {
    this.cines = localStorage.getItem('cines')
    this.verCines();
    this.cine
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

  updateCine(){
    this.restCine.updateCine(this.user._id, this.cine).subscribe((res:any)=>{
      if(res.cineUpdated){
        alert(res.message);
        localStorage.setItem('cineSelected', JSON.stringify(res.cineUpdated))
      }else{
        alert(res.message)
      }
    },error => console.log(<any>error))
  }

  deleteCine(){
    this.restCine.deleteCine(this.user._id, this.cine._id).subscribe((res:any)=>{
      if(res.cineRemoved){
        alert(res.message);
        localStorage.removeItem('cineSelected')
        this.router.navigateByUrl('cinesHome')
      }else{
        alert(res.message)
      }
    })
  }

  subirImage(){
    this.uploadImage.fileRequestCine(this.user._id,this.cine._id ,[], this.filesToUpload, this.token, 'image')
      .then((res:any)=>{
        if(res.cine){
          this.cine.image = res.cineImage;
          this.cine = res.cine;
          localStorage.setItem('cines', JSON.stringify(this.cine));
          alert('Imagen de cine subida con exito');
          this.router.navigateByUrl('cinesHome')
        }else{
          alert('imagen subida con exito')
        }
      }, error => console.log(<any>error))
  }

  fileChange(fileInput){
    this.filesToUpload = <Array<File>>fileInput.target.files;
    console.log(this.filesToUpload)
  }

}
