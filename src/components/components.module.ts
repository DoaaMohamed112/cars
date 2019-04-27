import { NgModule } from '@angular/core';
import { CarInfoComponent } from './car-info/car-info';
import {RatingModule} from 'ngx-rating';
import { IonicPageModule } from 'ionic-angular';
@NgModule({
	declarations: [CarInfoComponent],
	imports: [RatingModule,
		IonicPageModule
	],
	
	exports: [CarInfoComponent]
})
export class ComponentsModule {}
