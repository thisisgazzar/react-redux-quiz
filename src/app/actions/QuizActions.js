import * as actionTypes from "./actionTypes";

export const nextQuestion = score => {
  return {
    type: actionTypes.NEXT_QUESTION,
    score: score
  };
};

export const initQuiz = () => {
  return {
    type: actionTypes.INIT_QUIZ
  };
};

export const showResult = () => {
  return {
    type: actionTypes.SHOW_RESULT
  };
};

