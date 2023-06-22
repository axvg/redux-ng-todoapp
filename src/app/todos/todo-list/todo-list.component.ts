import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Todo } from '../models/todo.model';
import { validFilter } from '../filter/filter.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  todos: Todo[] = [];
  selectedFilter!: validFilter;

  ngOnInit() {
    this.store.subscribe((state) => {
      this.todos = state.todos;
      this.selectedFilter = state.filter;
    })
  }

  constructor(private store: Store<AppState>) {}
}
