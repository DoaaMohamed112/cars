import { Component, Input } from '@angular/core';
import { Car } from '../../models/Car';

@Component({
  selector: 'car-info',
  templateUrl: 'car-info.html'
})
export class CarInfoComponent {
@Input() car : Car;
 
  constructor() {
  }

}
