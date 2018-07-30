import { HomeState } from "./home.state";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import {
  QAConfigModal,
  QAAnswerModal,
  CorrectWrongAnsModal
} from "../../app/models/models";
import * as HomeAction from "./home.action";
import { state } from "@angular/core/src/animation/dsl";

export const initialState: HomeState = {
  qaModal: [],
  selectedQA: <QAConfigModal>{
    id: "",
    question: "",
    imgUrl: "",
    options: []
  },
  selectedAnswer: <QAAnswerModal>{
    id: "",
    answer: "",
    isCorrectAnswer: false
  },
  correctWrongAns: <CorrectWrongAnsModal>{
    correctAnswer: [],
    wrongAnswer: []
  }
};

export function reducer(
  state = initialState,
  action = HomeAction.All
): HomeState {
  switch (action.type) {
    case HomeAction.SetQAData:
      return {
        ...state,
        qaModal: [...action.payload]
      };
    case HomeAction.SelectedQA:
      return {
        ...state,
        selectedQA: action.payload
      };
    case HomeAction.SelectedAnswer:
      let correctWrongAnsArr = updateCorrectWrongAnswer(
        action.payload,
        state.selectedQA,
        state.correctWrongAns
      );
      return {
        ...state,
        selectedAnswer: action.payload,
        correctWrongAns: correctWrongAnsArr
      };
    default:
      return state;
  }
}

const updateCorrectWrongAnswer = (
  selectedAnswer: QAAnswerModal,
  selectedQA: QAConfigModal,
  correctWrongAnsArr: CorrectWrongAnsModal
): CorrectWrongAnsModal => {
  if (selectedAnswer) {
    // append the data
    if (selectedAnswer.isCorrectAnswer) {
      correctWrongAnsArr.correctAnswer.push(selectedQA);
    } else {
      correctWrongAnsArr.wrongAnswer.push(selectedQA);
    }
  } else {
    //reset the CorrectWrongAnsModal
    correctWrongAnsArr = {
      correctAnswer: [],
      wrongAnswer: []
    };
  }
  return correctWrongAnsArr;
};

export const getHomeStateSelector = createFeatureSelector<HomeState>(
  "homeState"
);

export const getHomeState = createSelector(
  getHomeStateSelector,
  (state: HomeState) => state
);

export const getQADataState = createSelector(
  getHomeStateSelector,
  (state: HomeState) => {
    return {
      qaModal: state.qaModal,
      selectedQA: state.selectedQA,
      correctWrongAnsArr: state.correctWrongAns
    };
  }
);

// export const getSelectedQAState = createSelector(getHomeStateSelector, (state: HomeState) => {
//   return {
//     selectedQA: state.selectedQA,
//     correctWrongAnsArr: state.correctWrongAnsArr
//   }
// });

// export const getCorrectWrongAnsState = createSelector(getHomeStateSelector, (state) => state.correctWrongAnsArr);
