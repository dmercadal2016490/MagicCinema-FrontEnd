import { Component, OnInit } from '@angular/core';
import { RestUserService } from 'src/app/services/restUser/rest-user.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User;
  token:string;
  userLogged;

  constructor(private restUser: RestUserService, private router:Router) {
    this.user = new User('','','','','','','','',[],[]);
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.restUser.login(this.user, 'true').subscribe((res:any)=>{
      if(!res.token){
        alert(res.message);
      }else{
        this.userLogged = res.user;
        this.token = res.token;
        delete this.userLogged.password;
        localStorage.setItem('movieSelected', '{"asientos":[],"_id":"60fae3c476c00b05cc02a57e","name":"logan","sinopsis":"Ultima pelicula de Wolverine","clasificacion":"+18","categoria":"Accion","estado":"Disponible","__v":0,"image":"6jD23MmqwbqyGEaTKzOnT8c3.jpg"}')
        if(this.token.length <= 0){
          alert('El token no se genero correctamente');
        }else{
          localStorage.setItem('token', this.token);
          localStorage.setItem('user', JSON.stringify(this.userLogged));
          alert('Usuario logeado correctamente')
          this.router.navigateByUrl('home')
        }
      }
    },
      (error:any) => alert(error.error.message)
    )
  }

}
