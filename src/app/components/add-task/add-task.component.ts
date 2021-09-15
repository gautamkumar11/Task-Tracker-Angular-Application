import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from "../../task";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  id ! : number;
  text !: string;
  day! : string;
  reminder: boolean = false;

  ngOnInit(): void {}
  
  

  onSubmit() {
    if (!this.text) {
      alert('Please add a task!');
      return;
    }

    const newTask = {
      id : this.id,
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    this.onAddTask.emit(newTask);

    this.id = 5;
    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
