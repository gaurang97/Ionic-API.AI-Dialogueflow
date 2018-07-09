import { Component, NgZone } from '@angular/core';

import { Platform, NavController } from 'ionic-angular';
import {ApiAiClient} from "api-ai-javascript";
const client = new ApiAiClient({accessToken: '75b05e7e522548ecb9d52428522944fe'})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  answer:any;
  constructor(public navCtrl: NavController,public ngZone: NgZone, public platform: Platform) {
    
  }
 ask(question){
   client.textRequest(question)
   .then(({result: {fulfillment : {speech}}})=>
  this.ngZone.run(()=>{
    this.answer = speech;
  }))
 }
}
