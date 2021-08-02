import { Component, OnInit } from '@angular/core';
import { Golosina } from 'src/app/models/golosina';
import { Cine } from 'src/app/models/cine';
import { CONNECTION } from 'src/app/services/global';
import { ResourceLoader } from '@angular/compiler';
import { RestCineService } from 'src/app/services/restCine/rest-cine.service';
import { Router } from '@angular/router';
import { RestUserService } from 'src/app/services/restUser/rest-user.service';
import { UploadImageService } from 'src/app/services/uploadImage/upload-image.service';

@Component({
  selector: 'app-golosinas',
  templateUrl: './golosinas.component.html',
  styleUrls: ['./golosinas.component.css']
})
export class GolosinasComponent implements OnInit {

  constructor(private restCine:RestCineService, private router:Router, private restUser:RestUserService, private uploadImage:UploadImageService) {
    this.uri = CONNECTION.URI;
    this.user = this.restUser.getUser();
  }

  user;
  cine;
  public uri:string;
  golosinas;
  golosina:Golosina;
  cineSelected:Cine;
  golosinaselected:Golosina;
  public filesToUpload:Array<File>;
  public token;
  message;

  ngOnInit(): void {
    this.cine = this.restCine.getCine();
    this.cineSelected = JSON.parse(localStorage.getItem('cineSelected'));
    this.golosinaselected = JSON.parse(localStorage.getItem('golosinaSelected'));
    this.golosinas = localStorage.getItem('golosinas');
    this.verGolosinas();
    this.user = this.restUser.getUser();
    this.token = this.restUser.getToken();
  }

  verGolosinas(){
    this.restCine.verGolosinas(this.cine._id).subscribe((res:any)=>{
      if(res){
        this.golosinas = res.golosinas.golosinas
        localStorage.setItem('golosinas', JSON.stringify(this.golosinas));
      }else{
        alert(res.message);
      }
    })
  }

  uploadImageGolosina(){
    this.uploadImage.fileRequesGolosina(this.user._id, this.golosina._id,[], this.filesToUpload,this.token,'image')
      .then((res:any)=>{
        if(res.golosina){
          this.golosina.image = res.golosinaImage;
          localStorage.setItem('movieSelected', JSON.stringify(this.golosinaselected))
          alert('imagen de Golosina subida con exito');
        }else{
          alert('imagen Subida')
        }
      },
      (error:any) => alert('Error al subir la imagen' + error)
      )
  }

  fileChange(fileInput){
    this.filesToUpload = <Array<File>>fileInput.target.files;
    console.log(this.filesToUpload)
  }


  obtenerData(golosinaSelected){
    this.golosina = golosinaSelected;
    localStorage.setItem('golosinaSelected', JSON.stringify(this.golosinaselected));
    console.log(this.golosinaselected)
  }
}
