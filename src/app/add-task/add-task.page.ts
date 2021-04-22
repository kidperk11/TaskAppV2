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
    taskName: '',
    dueDate: '',
    dueTime: '',
    description: '',
  };
  taskID: string = 'new';
  constructor(private firestore: AngularFirestore,
     private router: Router, 
     private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.task);
    this.taskID = this.route.snapshot.params.taskID || 'new';

    if(this.taskID !== 'new'){
      this.firestore.doc('taskData/${this.taskID}')
      .valueChanges()
      .subscribe((task: any) => (this.task = task));
      console.log(this.firestore.doc('taskData/${this.taskID}'));
    }
  }

  saveTask(): void{
    if (this.taskID === 'new'){
      this.firestore.collection('taskData')
      .add(this.task)
      .then(() => {
        this.task = null;
        this.router.navigateByUrl('');
      })
    }else{
      this.firestore.doc('taskData/${this.taskID}')
      .update(this.task)
      .then(() => {
        this.task = null;
        this.router.navigateByUrl('');
      })
    }
    
  }

}
