import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// @ts-ignore
// @ts-ignore
/**
 * Generated class for the IprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-iprofile',
  templateUrl: 'iprofile.html',
})
export class IprofilePage {
  user = {
    name: 'Wale temitayo',
    profileImage: 'assets/img/avatar/girl-avatar.png',
    coverImage: 'assets/img/background/background-5.jpg',
    occupation: 'Web developer',
    location: 'Lagos, NG',
    description: 'Passionate Web developer. Recently focusing on developing mobile hybrid apps and web development.',
    address: '6 Force Road Tafawa Balewa Square\'s Lagos Nigeria ',
    phone: '0805 2707 218',
    email: 'tayot51@gmail.com.com',
    whatsapp: '0805 2707 218',
  };


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IprofilePage');
  }

}
