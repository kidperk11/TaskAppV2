import { AlertController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component} from '@angular/core';

interface User{
  email?: string;
  password?: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user: User = {
    email: '',
    password: '',
  };
  taskData;
  constructor(
    public afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    public alertController: AlertController
  ) {
    this.firestore.collection('taskData')
    .valueChanges({ idField: 'taskID'})
    .subscribe(taskData =>{
      this.taskData = taskData;
      console.log(taskData);
    });
  }

  async createAccount(){
    const user = await this.afAuth.createUserWithEmailAndPassword(
      this.user.email,
      this.user.password
    )
  }

  async login(){
    await this.afAuth.signInWithEmailAndPassword(
      this.user.email,
      this.user.password
    );
  }

  async /*MOVE TO SETTINGS*/ logout(){
    await this.afAuth.signOut();
  }

  async recoverPassword(){
    const alert = await this.alertController.create({
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
