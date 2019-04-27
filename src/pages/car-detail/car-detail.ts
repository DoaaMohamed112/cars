import { Component } from '@angular/core';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-car-detail',
  templateUrl: 'car-detail.html',
})
export class CarDetailPage {

  carlist = [1, 2, 3];  // dummy list of cars
  myIndex: number;
  constructor(public navCtrl: NavController, public navParams: NavParams, private localNotifications: LocalNotifications) {
    // Set the active tab based on the passed index from menu.ts
    this.myIndex = navParams.data.tabIndex || 0;
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
}
