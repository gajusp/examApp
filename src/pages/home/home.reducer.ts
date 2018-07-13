import { HomeState } from "./home.state";
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AnswerModal, QAConfigModal } from "../../app/models/models";
import * as homeAction from './home.action';

export const initialState: HomeState = {
  // qaModal: <QAConfigModal>{
  //   id: "",
  //   question: "",
  //   imgUrl: "",
  //   options: []
  // }
  qaModal: []
};

export function reducer(state = initialState, action = homeAction.All): HomeState {

  switch (action.type) {
    case homeAction.SetQAData:
      return {
        ...state,
        qaModal: [...action.payload]

      }
    default:
      return state
  }
}

export const getHomeStateSelector = createFeatureSelector<HomeState>('homeState');

export const getHomeState = createSelector(getHomeStateSelector, (state: HomeState) => state);


export const getQADataState = createSelector(getHomeStateSelector, (state) => state.qaModal);
