import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as actions from '../todo.actions';
import { AppState } from 'src/app/app.reducer';

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
      this.store.dispatch(actions.toggleTodo({ id: this.todo.id }))
    })
  }

  edit(){
    this.editing = true;
    this.txtInput.setValue(this.todo.text);

    setTimeout(() => {
      this.txtInputF.nativeElement.select();
    }, 1)
  }

  finishEdition(){
    this.editing = false;

    if (this.txtInput.invalid || this.txtInput.value === this.todo.text) {
      return;
    }

    this.store.dispatch(actions.updateTodo({ id: this.todo.id, text: this.txtInput.value }));
  }

  delete(){
    this.store.dispatch(actions.deleteTodo({ id: this.todo.id }));
  }

  chckCompleted!: FormControl;
  txtInput!: FormControl;
  
  editing = false;

  constructor(private store: Store<AppState>) {}
}