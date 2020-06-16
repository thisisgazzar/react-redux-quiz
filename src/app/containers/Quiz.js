import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { nextQuestion, initQuiz, showResult } from "../actions/QuizActions";
import Questions from "../components/Questions";
import Result from "../components/Result";

class Quiz extends Component {
  state = {
    answer: ''
  };

  nextQuestion = (e, answer) =>{
    e.preventDefault();
    let score = 0;
    if (this.state.answer === answer) {
      score = 1;
    }
    this.props.nextQuestion(score);
  };
  initQuiz = () =>{
    this.setState({answer: ''});
    this.props.initQuiz();
  }

  selectAnswer = answer => {
    this.setState({answer: answer});
  };

  render() {
    const { question, count, questionsNumber, showResult, finalResult } = this.props;
    const { nextQuestion, selectAnswer, initQuiz } = this;
    return (
      <Router>
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <Questions
                  question={question}
                  answer={this.state.answer}
                  count={count}
                  questionsNumber={questionsNumber}
                  nextQuestion={nextQuestion}
                  showResult={showResult}
                  selectAnswer={selectAnswer}
                />
              )}
            />
            <Route path="/result" render={() => <Result initQuiz={initQuiz} finalResult={finalResult} />} />
          </Switch>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    question: state.question,
    count: state.count,
    questionsNumber: state.questionsNumber,
    finalResult: state.finalResult
  };
};

const mapDispatchToProps = dispatch => {
  return {
    nextQuestion: score => dispatch(nextQuestion(score)),
    initQuiz: () => dispatch(initQuiz()),
    showResult: () => dispatch(showResult())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);