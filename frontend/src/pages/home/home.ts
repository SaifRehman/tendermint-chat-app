import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomeService } from '../home/home.service'
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public senderName: string = '';
  content: string;
  public allData: any = null;
  constructor(public navCtrl: NavController, public homeService: HomeService) {
    this.senderName = sessionStorage.getItem('name');
    Observable.interval(1000).subscribe(x => {
      this.homeService.get().subscribe((data) => {
        data = data['messages'].filter(function (n) { return n != null });
        this.allData = data;
        console.log(this.allData);
      },
        (error) => {
          console.log(error)
        })
    });
  }
  sendMessage() {
    console.log(this.content);
    this.homeService.post(this.content).subscribe((data) => {
      console.log('success');
      this.content = '';
    },
      (error) => {
        console.log(error)
      })
  }
}
