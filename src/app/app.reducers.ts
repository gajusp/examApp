import {
  ActionReducerMap,
  ActionReducer,
  MetaReducer
} from "../../node_modules/@ngrx/store";
import { AppState } from "./app.state";
import * as homeReducer from '../pages/home/home.reducer';

export const reducers: ActionReducerMap<AppState> = {
  homeState: homeReducer.reducer
};

export function logger(
  reducer: ActionReducer<AppState>
): ActionReducer<AppState> {
  return function (state: AppState, action: any): AppState {
    const nextState = reducer(state, action);
    return nextState;
  };
}

export const metaReducers: MetaReducer<AppState>[] = false ? [] : [logger];
