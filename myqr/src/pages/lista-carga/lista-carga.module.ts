import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaCargaPage } from './lista-carga';

@NgModule({
  declarations: [
    ListaCargaPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaCargaPage),
  ],
})
export class ListaCargaPageModule {}
