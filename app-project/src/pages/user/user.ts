import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {
user={
  email:'',
  password:''
};
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
  }

  ToSignUpPage():void {
    this.navCtrl.push('SignUpPage');
  }

}
