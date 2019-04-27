import { Component, Input } from '@angular/core';

@Component({
  selector: 'car-info',
  templateUrl: 'car-info.html'
})
export class CarInfoComponent {

  car =  // dummy object contains car data.
  {
    "logo":"../../assets/imgs/bmw.png",
    "type":"BMW",
    "price":"&79.00000",
    "img":"../../assets/imgs/car.jpg",
    "car_number":"2016 BMW M4",
    "rate":4.7
  }
  constructor() {
  }

}
