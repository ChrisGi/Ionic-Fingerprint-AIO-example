import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio';
import { PromiseObservable } from 'rxjs/observable/PromiseObservable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ FingerprintAIO ]
})
export class HomePage {

  constructor(public navCtrl: NavController, public fingerprint: FingerprintAIO) {

  }

  public showFingerprintModal() {
    PromiseObservable.create(this.fingerprint.show({
      clientId: 'Fingerprint-Demo',
      clientSecret: 'password', //Only necessary for Android
      disableBackup:true,  //Only for Android(optional)
      localizedFallbackTitle: 'Use Pin', //Only for iOS
      localizedReason: 'Please authenticate' //Only for iOS

    }))
    .subscribe(
      value => console.log('Scanned', value),
      error => console.error('Scanner error', error));
  }
}
