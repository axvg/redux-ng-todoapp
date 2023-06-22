import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from '../todo.actions';
import { FormControl, Validators } from '@angular/forms';
import { AppState } from 'src/app/app.reducer';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent {

  txtInput!: FormControl;

  ngOnInit(){
  }

  add(){
    if (this.txtInput.invalid){ return; }
    this.store.dispatch(actions.createTodo({text: this.txtInput.value}))

    this.txtInput.reset();
  }

  constructor(private store: Store<AppState>) {
    this.txtInput = new FormControl('', Validators.required);
  }
}
