import { Component, OnInit } from '@angular/core';
import { RestUserService } from 'src/app/services/restUser/rest-user.service';
import { CONNECTION } from '../../services/global';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { UploadImageService } from 'src/app/services/uploadImage/upload-image.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user;
  public filesToUpload:Array<File>;
  public uri:string;
  public possiblePass;
  public token;

  constructor(private restUser:RestUserService, private router:Router, private uploadUser:UploadImageService) {
    this.possiblePass =''            
    this.user = this.restUser.getUser();
    this.token = this.restUser.getToken();
    this.uri = CONNECTION.URI
  }

  ngOnInit(): void {
  }

  uploadImage(){
    this.uploadUser.fileRequest(this.user._id, [], this.filesToUpload, this.token, 'image')
      .then((res:any)=>{
        if(res.user){
          this.user.image = res.userImage;
          localStorage.setItem('user', JSON.stringify(this.user));
          alert('Imagen subida con exito');
        }else{
          alert(res.message)
        }
      })
  }

  fileChange(fileInput){
    this.filesToUpload = <Array<File>>fileInput.target.files;
    console.log(this.filesToUpload)
  }


  updateUser(){
    delete this.user.password;
    delete this.user.role;
    this.restUser.updateUser(this.user).subscribe((res:any)=>{
      if(res.userActualizar){
        delete res.userUpdated.password;
        localStorage.setItem('user', JSON.stringify(this.user));
        alert(res.message);
      }else{
        alert(res.message);
        this.user = this.restUser.getUser();
      }
    },
    (error:any)=>alert(error.error.message)
    )
  }

  deleteUser(){
    this.restUser.deleteUser(this.user._id, this.possiblePass).subscribe((res:any)=>{
      if(!res.userRemoved){
        alert(res.message)
      }else{
        alert(res.message);
        localStorage.clear();
        this.router.navigateByUrl('/index');
      }
    },
    (error:any)=> alert(error.error.message)
    )
  }
}
