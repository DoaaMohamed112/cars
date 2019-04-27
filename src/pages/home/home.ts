import { Component, ViewChild } from '@angular/core';
// import { AppRate } from '@ionic-native/app-rate';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { IonicPage, NavController, NavParams, Tabs } from 'ionic-angular';
import { Car } from '../../models/Car';


/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  car : Car = 
  {
    "logo":"../../assets/imgs/bmw.png",
    "type":"BMW",
    "price":"&79.00000",
    "img":"../../assets/imgs/car.jpg",
    "car_number":"2016 BMW M4",
    "rate":4.7
  } // dummy object contains car data.
  carlist : Car[]= [];
  myIndex: number;
  constructor(public navCtrl: NavController, public navParams: NavParams, private localNotifications: LocalNotifications) {
    // Set the active tab based on the passed index from menu.ts
    this.myIndex = navParams.data.tabIndex || 0;
    this.carlist.push(this.car);
    this.carlist.push(this.car);
    this.carlist.push(this.car);
  }

  ionViewDidLoad() {
  }

  // Custom tab click event
  OnActive(tabId) {
    // nonactivate the old active tab
    var elem1 = document.getElementsByClassName('tabactive')[0];
    elem1.className = elem1.className.replace("tabactive", "");
    // activate the clicked one
    var elem2 = document.getElementById(tabId);
    elem2.className += " tabactive";

  }
  // this method used to send notification 
  OnNotify() {
    this.localNotifications.requestPermission().then((permission) => {
      this.localNotifications.schedule({
        id: 0,
        text: 'Hello! This notification to say you are welcome here ;) .',
        trigger: { at: new Date(new Date().getTime()) },
        foreground: true,
        vibrate: true,
        led: { color: '#FF00FF', on: 500, off: 500 },
        data: { mydata: 'My hidden message this is' },
        sound: null,
      });
    });
  }
  // this method navigate to detailed page 
  Navigate() {
    this.navCtrl.setRoot('CarDetailPage');
  }
}
