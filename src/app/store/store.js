import { createStore } from "redux";
import QuizReducer from "../reducers/QuizReducer";

const store = createStore(QuizReducer);

export default store;