import { Injectable } from "../../../node_modules/@angular/core";
import { Observable } from "../../../node_modules/rxjs/Observable";
import { HomeState } from "../../pages/home/home.state";
import { Store, Action } from "../../../node_modules/@ngrx/store";
import { AppState } from "../app.state";
import * as homeReducer from "../../pages/home/home.reducer";
import * as qaDataSelector from '../../pages/home/home.reducer';

export const HomeReducer = homeReducer;
export const QADataSelector = qaDataSelector;
@Injectable()
export class AppStoreService {
  homeState$: Observable<HomeState>;
  constructor(private store: Store<AppState>) {
    this.homeState$ = store.select(homeReducer.getHomeState);
  }

  select<K>(mapFn: (state: AppState) => K): Store<K> {
    return this.store.select(mapFn);
  }

  dispatch<V extends Action = Action>(action: V): void {
    this.store.dispatch(action);
  }
}
