import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.page.html',
  styleUrls: ['./add-task.page.scss'],
})
export class AddTaskPage implements OnInit {
  task = {
    id: '',
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
  taskID: string = '';

  constructor(private firestore: AngularFirestore,
     private router: Router, 
     private route: ActivatedRoute,
     public afAuth: AngularFireAuth
     ) {
      this.afAuth.authState.subscribe(user => {
        if (user) {
          this.taskID = this.route.snapshot.params.taskID;
          this.userId = user.uid;
          console.log(this.userId);
          console.log(this.taskID);
          /*this.fireStoreTaskList = */this.firestore.doc('users/' + this.userId)
          .collection('taskData')
          .doc('${this.taskID}')
          .valueChanges()
          .subscribe((task: any) =>{
            this.task = task;
          });
          this.fireStoreList = this.firestore.doc('users/' + this.userId).collection('taskData');
        }
      });
      console.log(this.taskData);
      }

  ngOnInit() {
   
  }

  saveTask(): void{
    
      this.fireStoreList.doc('taskData/${this.taskID}')
      .update({
        taskName: this.task.taskName,
        dueDate: this.task.dueDate,
        dueTime: this.task.dueTime,
        description: this.task.description
      })
      .then(() => {
        this.task = null;
        this.router.navigateByUrl('');
      })
    
    
  }

}
