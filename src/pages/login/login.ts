import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  LoginForm: FormGroup;
  User={"email":"","passowrd":""};  // dummy object to buind user data.

  constructor(public navCtrl: NavController, public navParams: NavParams,public formBuilder: FormBuilder) {
  
    // Initiate the formbuilder for validations.
    this.LoginForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required,Validators.email])],     
      password: ['',Validators.compose([Validators.required,Validators.maxLength(8),Validators.minLength(6)])]
  });
  
}

  ionViewDidLoad() {
  }

  // this function to submit login and navigate to home page.
  doLogin() {
    this.navCtrl.push('SidemenuPage', {
      param1: this.User.email
  });
  }

}
