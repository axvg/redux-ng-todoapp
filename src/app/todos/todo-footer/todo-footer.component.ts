import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from '../filter/filter.actions';
import { AppState } from 'src/app/app.reducer';
import { setFilter } from '../filter/filter.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent {

  selectedFilter: actions.validFilter = 'all' as actions.validFilter;
  filters: actions.validFilter[] = ['all', 'active', 'completed'];

  activeNumber: number = 0;

  ngOnInit(){
    this.store.subscribe(state => {
      this.selectedFilter = state.filter;
      this.activeNumber = state.todos.filter(todo => !todo.completed).length;
    });
  }

  filterBy(filter: actions.validFilter){
    this.store.dispatch(setFilter({ filter}))
  }

  constructor(private store: Store<AppState>) {}
}
