import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input() todo!: Todo;
  @ViewChild('inputF') txtInputF!: ElementRef;

  ngOnInit() {
    this.chckCompleted = new FormControl(this.todo.completed);
    this.txtInput = new FormControl(this.todo.text, Validators.required);

    this.chckCompleted.valueChanges.subscribe(value => {
      this.todo.completed = value;
    })
  }

  edit(){
    this.editing = true;
    setTimeout(() => {
      this.txtInputF.nativeElement.select();
    }, 1)
  }

  finishEdition(){
    this.editing = false;
  }

  chckCompleted!: FormControl;
  txtInput!: FormControl;
  
  editing = false;
}