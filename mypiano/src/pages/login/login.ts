import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase } from 'angularfire2/database';
import { UsuarioItem } from '../../models/usuarios-list/usuarios-list.interface';

import { CuerdaPage } from '../cuerda/cuerda';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  usuarioItem =  {} as UsuarioItem;
  ingreso = "";
  public usuarios: UsuarioItem[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase) {
    //this.usuarioListRef$ = this.database.list('usuarios');
    this.database.list('usuarios').subscribe(usuarios => this.usuarios = usuarios,error => console.log(error));
  }

  login(){
    console.log(this.usuarios);
    //this.ingreso = this.buscarUsuario(this.usuarioItem);
    this.buscarUsuario(this.usuarioItem)
  }

  buscarUsuario(usuario: UsuarioItem):void{
    //let retorno = "El usuario no esta registrado";

    //let miUsuario: UsuarioItem;

    this.usuarios.forEach(usuarios => {
      if((usuarios.nombre == usuario.nombre) && (usuarios.clave == usuario.clave)){
        //return retorno = "El usuario se logeo";
        this.navCtrl.setRoot(CuerdaPage);  
      }
    });

    //return retorno;
  }

  loguearAdmin(){
    this.usuarioItem.nombre = "admin";
    this.usuarioItem.clave = 11;
  }

  loguearUsuario(){
    this.usuarioItem.nombre = "usuario";
    this.usuarioItem.clave = 33;
  }

}
