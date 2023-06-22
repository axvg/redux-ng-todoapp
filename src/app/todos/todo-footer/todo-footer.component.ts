import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from '../filtro/filtro.actions';
import { AppState } from 'src/app/app.reducer';
import { setFilter } from '../filtro/filtro.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent {

  selectedFilter: actions.validFilter = 'all' as actions.validFilter;
  filters: actions.validFilter[] = ['all', 'active', 'completed'];

  ngOnInit(){
    this.store.select('filter').subscribe(filter => this.selectedFilter = filter);
  }

  filterBy(filter: actions.validFilter){
    this.store.dispatch(setFilter({ filter}))
  }

  constructor(private store: Store<AppState>) {}
}
