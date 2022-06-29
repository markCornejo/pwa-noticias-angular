import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SwPush } from '@angular/service-worker';
import { NotificationsService } from './services/notifications.service';
// import { OneSignal } from 'onesignal-ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  public readonly VALIP_PUBLIC_KEY = 'BH74TPmAT8gf4aADXmSejlEdvLvQ8AsZfIiRTap_naX27zPE_FMM1W5R9h8-lP8CnC74iwHKIdSmMJTzYZ85CcI';
  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    // private oneSignal: OneSignal
    // private swPush: SwPush,
    // private notificationsService: NotificationsService
  ) {
    this.initializeApp();
    this.subscribeToNotifications();
  }

  subscribeToNotifications(): void {
    /*
    this.oneSignal.init({
      appId: "d374f7a0-49f4-4635-a9c2-e0ee663ddc10",
    });
*/
    /*
    this.swPush.requestSubscription({
      serverPublicKey: this.VALIP_PUBLIC_KEY
    }).then(sub => {
      const token = JSON.parse(JSON.stringify(sub));
      // console.log('MI TOKEN ', token);
      this.notificationsService.saveToken(token).subscribe((res: Object) => {
        console.log(res);
      }, (err) => {
        console.log('ERR', err);
      });
    }).catch(err => console.error('UPS :(', err));
    */
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleLightContent();
      this.splashScreen.hide();
    });
  }
}
