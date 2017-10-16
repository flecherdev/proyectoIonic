import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase } from 'angularfire2/database';
import { UsuarioItem } from '../../models/usuarios-list/usuarios-list.interface';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  usuarioItem =  {} as UsuarioItem;
  nombre:string;
  foto:string;
  usuarios: UsuarioItem[];
  usuario:UsuarioItem;

  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase) {
    //this.usuarioListRef$ = this.database.list('usuarios');
    this.database.list('usuarios-chat').subscribe(usuarios => this.usuarios = usuarios,error => console.log(error));
  }

  login(){
    console.log(this.usuarios);
    //this.ingreso = this.buscarUsuario(this.usuarioItem);
    this.buscarUsuario(this.usuarioItem);
  }

  buscarUsuario(usuario: UsuarioItem):void{
    //let retorno = "El usuario no esta registrado";

    this.usuarios.forEach(usuarios => {
      let thit=this;
      if((usuarios.nombre == usuario.nombre) && (usuarios.clave == usuario.clave)){
        this.nombre = usuarios.nombre;
        this.foto = usuarios.foto;
        
        console.log(usuarios.nombre);
        console.log(usuarios.foto);
        this.navCtrl.setRoot(HomePage,{usuario:this.usuarioItem.nombre,foto:this.foto});//se pasa un parametro a otra pagina
      // this.navCtrl.setRoot(TabsPage,{"usu": "pepe"});
      // const profileModal = this.ModalCtrl.create(TabsPage,{nombre : this.nombre});
      // profileModal.present();
      }
    });
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
