import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HomePage} from '../home/home'
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
 name:string
  constructor(public navCtrl: NavController) {

  }
  enter(){
    console.log('button clcked');
    sessionStorage.setItem('name',this.name);
    this.navCtrl.push(HomePage);
  }
}
