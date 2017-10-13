import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EstadoVotacionPage } from './estado-votacion';

@NgModule({
  declarations: [
    EstadoVotacionPage,
  ],
  imports: [
    IonicPageModule.forChild(EstadoVotacionPage),
  ],
})
export class EstadoVotacionPageModule {}
