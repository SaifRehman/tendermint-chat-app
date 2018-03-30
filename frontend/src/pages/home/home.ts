import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomeService } from '../home/home.service'
import { Observable } from 'rxjs/Rx';
import { Content } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Content) contentScroll: Content;
  public senderName: string = '';
  public temp:any;
  content: string;
  scroll:any;
  public allData: any = null;
  constructor(public navCtrl: NavController, public homeService: HomeService) {
    this.senderName = sessionStorage.getItem('name');
    Observable.interval(2000).subscribe(x => {
      this.homeService.get().subscribe((data) => {
        data = data['messages'].filter(function (n) { return n != null });
        this.allData = data;
        if(this.scroll){
          if (sessionStorage.getItem('allData') === null || sessionStorage.getItem('allData') === undefined )
          {
            sessionStorage.setItem('allData',JSON.stringify(this.allData))
          }
          else{
             this.temp = sessionStorage.getItem('allData'),
            this.temp  = JSON.parse(this.temp)
            if(this.temp.length !== this.allData.length ){
              sessionStorage.setItem('allData',JSON.stringify(this.allData))
              this.contentScroll.scrollToBottom();
            }
          }
        }
      },
        (error) => {
          console.log(error)
        })
    });
  }
  sendMessage() {
    this.homeService.post(this.content).timeout(2000).subscribe((data) => {
      this.content = '';
    },
      (error) => {
        console.log(error)
        this.content = '';
      })
  }
}