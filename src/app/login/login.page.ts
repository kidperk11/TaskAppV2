import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertCtrl: AlertController,
    public afAuth: AngularFireAuth
  ) {}
  
  async loginUser(credentials): Promise<void> {
    this.authService.loginUser(credentials.email, credentials.password).then(
      () => {
        this.router.navigateByUrl('home');
      },
      async error => {
        const alert = await this.alertCtrl.create({
          message: error.message,
          buttons: [{ text: 'Ok', role: 'cancel' }],
        });
        await alert.present();
      }
    );
  }

  async recoverPassword(){
    const alert = await this.alertCtrl.create({
      cssClass: 'home.page.css',
      header: 'Recover Your Password',
      subHeader: 'Please enter the email associated with your account, and you will be sent a link to reset your password.',
      inputs:[{
        name: 'email',
        type: 'email',
        placeholder: 'example@gmail.com'
      }],
      buttons:[{
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel Success');
        }
      }, {
        text: 'Send Password Reset Email',
        handler: (reset) => {
          console.log('Send Email Clicked Success');
          // this.sendResetEmail(console.log(reset));
          console.log(reset.email);
          this.afAuth.sendPasswordResetEmail(reset.email).then((res: any) => {
            console.log('Reset email has been sent');
          }, (error) => {
            console.log("Catch error");
          })
          
        }
      }
      ]
    });

    await alert.present();
  }

  async sendResetEmail(reset){
    await this.afAuth.sendPasswordResetEmail(reset).then((res: any) => {
      console.log('Reset email has been sent');
    }, (error) => {
      console.log("Catch error");
    });
  }

}
