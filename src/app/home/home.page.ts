import { AlertController, NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
interface User{
  email?: string;
  password?: string;
}
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  user: User = {
    email: '',
    password: '',
  };

  task = {
    taskName: '',
    dueDate: '',
    dueTime: '',
    description: '',
  };

  taskList: string[] = [];
  //taskName: string = '';
  userId: any;
  taskData: any;
  fireStoreList: any;

  constructor(
    public afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    public alertCtrl: AlertController,
    public navCtrl: NavController
  ) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userId = user.uid;
        console.log(this.userId);
        /*this.fireStoreTaskList = */this.firestore.doc('users/' + this.userId)
        .collection('taskData')
        .valueChanges()
        .subscribe(taskData =>{
          this.taskData = taskData;
        });
        this.fireStoreList = this.firestore.doc('users/' + this.userId).collection('taskData');
      }
    });
    console.log(this.taskData);
  }
  ngOnInit() {
    
    //this.userId = this.afAuth.auth.currentUser.uid;

    //this.fireStoreTaskList = this.firestore.doc<any>('users/' + this.userId).collection('tasks');
  }

  convertDate(ISO){
    return moment(ISO).format('MM-DD-YYYY');
  }

  convertTime(ISO){
    return moment(ISO).format('h:mm a');
  }

  addTask() {
    if (this.task.taskName.length > 0) {
      // let task = this.task.taskName;
      let id = this.firestore.createId();
      this.fireStoreList.doc(id).set({
        id: id,
        taskName: this.task.taskName,
        dueDate: this.task.dueDate,
        dueTime: this.task.dueTime,
        description: this.task.description
      });
      this.task.taskName = "";
      this.task.dueDate = "";
      this.task.dueTime = "";
      this.task.description = "";
    }
  }

  deleteTask(index){
    //this.taskList.splice(index, 1);
    this.fireStoreList.doc(index).delete();
  }

  async updateTask(index, tName, desc) {
    // this.task = this.fireStoreList.doc(index).valueChanges();
    // console.log(this.task);
    const alert = await this.alertCtrl.create({
      header: 'Update Task?',
      message: 'Type in your new task to update.',
      inputs: [{ name: 'taskName', placeholder: tName}, {name: 'description', placeholder: desc}],
      buttons: 
      [{ text: 'Cancel', role: 'cancel' },
                
      //{ text: 'Update', handler: data => { this.taskList[index] = data.editTask; }}]
      { text: 'Update', handler: data => { this.fireStoreList.doc(index).update({ taskName: data.taskName, description: data.description }); }}]
    });
    await alert.present();
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
