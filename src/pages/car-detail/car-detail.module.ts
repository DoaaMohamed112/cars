import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CarDetailPage } from './car-detail';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    CarDetailPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(CarDetailPage),
  ],
})
export class CarDetailPageModule {}
