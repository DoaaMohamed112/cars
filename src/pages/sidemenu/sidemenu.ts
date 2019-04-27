import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { PageInterface } from '../../models/PageInterface';

/**
 * Generated class for the SidemenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sidemenu',
  templateUrl: 'sidemenu.html',
})
export class SidemenuPage {

  // Basic root for our content view
  rootPage = 'HomePage';
  email:string="";
  // Reference to the app's root nav
  @ViewChild(Nav) nav: Nav;
 
  pages: PageInterface[] = [
    { title: 'Home', pageName: 'HomePage', tabComponent: 'HomePage', index: 0, icon: 'home' },
    { title: 'Posts', pageName: 'PostsPage', tabComponent: 'PostsPage', index: 1, icon: 'heart' },
    { title: 'My Cart', pageName: 'HomePage', tabComponent: 'HomePage', index: 2, icon: 'cart' },
    { title: 'Profile', pageName: 'HomePage', tabComponent: 'HomePage', index: 3, icon: 'person' },
    { title: 'Setting', pageName: 'HomePage', tabComponent: 'HomePage', index: 4, icon: 'settings' },
  ];
 
  constructor(public navParams: NavParams,public navCtrl: NavController) { 
    this.email = navParams.get('param1'); 
  }
 
  openPage(page: PageInterface) {
    let params = {};
 
    // The index is equal to the order of our tabs inside tabs.ts
    if (page.index) {
      params = { tabIndex: page.index };
    }
 
    // The active child nav is our Tabs Navigation
    if (this.nav.getActiveChildNav() && page.index != undefined) {
      this.nav.getActiveChildNav().select(page.index);
    } else {
      // Tabs are not active, so reset the root page 
      // In this case: moving to or from SpecialPage
      this.nav.setRoot(page.pageName, params);
    }
  }
 // this method navigate to check out page
  Checkout()
  {
    this.navCtrl.push('CheckOutPage', {
      param1: this.email
  });

  }

}
