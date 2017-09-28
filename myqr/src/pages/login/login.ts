import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { UsuarioItem } from '../../models/usuarios-list/usuarios-list.interface';
import { MenuPage } from '../menu/menu';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  usuarioItem =  {} as UsuarioItem;
//  ingreso = "";
  public usuarios: UsuarioItem[];

  constructor(public navCtrl: NavController, public navParams: NavParams,private auth: AngularFireAuth,  private database: AngularFireDatabase) {
    //this.usuarioListRef$ = this.database.list('usuarios');
    this.database.list('usuarios').subscribe(usuarios => this.usuarios = usuarios,error => console.log(error));
  
  }

  login(){
    console.log(this.usuarios);
    //this.ingreso = this.buscarUsuario(this.usuarioItem);
    this.buscarUsuario(this.usuarioItem);
  }

  buscarUsuario(usuario: UsuarioItem):void{
    //let retorno = "El usuario no esta registrado";

    //let miUsuario: UsuarioItem;
    //let mail="pame@gmail.com";

    this.usuarios.forEach(usuarios => {
      if((usuarios.nombre == usuario.nombre) && (usuarios.clave == usuario.clave)){
        //return retorno = "El usuario se logeo";
        this.navCtrl.setRoot(MenuPage);
      }else{
        //alert("El usuario no se encuentra en la base") 
      }
      
    });
    //console.log();
    //return retorno;

    //forma utilizando autentificacion de usaurio por mail
    /*this.auth.auth.signInWithEmailAndPassword(mail,usuario.clave.toString()).then(r=>{console.log(r);});
    return "ss";*/
  }

}
