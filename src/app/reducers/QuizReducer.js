import * as actionTypes from "../actions/actionTypes";
import questions from "../data/Questions";

const initialState = {
  question: questions[0],
  count: 0,
  questionsNumber: questions.length,
  score: 0,
  finalResult: 0
};

const QuizReducer = (state = initialState, action) => {
  switch(action.type){
    case actionTypes.NEXT_QUESTION:
      return{
        ...state,
        question: questions[state.count + 1],
        count: state.count + 1,
        score: state.score + action.score
      };
    case actionTypes.INIT_QUIZ:
      return{
        ...state,
        question: questions[0],
        count: 0,
        score: 0
      };
    case actionTypes.SHOW_RESULT:
      return{
        ...state,
        finalResult: state.score
      };
    default:
      return state;
  }
};

export default QuizReducer;