import React from "react";
import { Link } from "react-router-dom";

const Questions = ({ questionsNumber, count, question, showResult, nextQuestion, answer, selectAnswer }) => {   
    const options = []; 
    let showQuestion = (
      <div>
        <Link
          className="submit"
          to="/result" onClick={showResult}
        >
          Check my Score
        </Link>
      </div>
    );

    if(questionsNumber > count){
      for (let option in question.options){
        options.push(option);
      }
      showQuestion = (
        <div id="formWrapper">
          <form onSubmit={event => nextQuestion(event, question.answer)}>
            <h2>{question.question}</h2>
            {options.map(option => {
              return (
                <div key={question.options[option]}>
                  <input
                    type="radio"
                    className=""
                    id={question.options[option]}
                    name={question.question}
                    answer={answer}
                    onChange={() =>
                      selectAnswer(question.options[option])
                    }
                  />
                  <label htmlFor={question.options[option]}>{question.options[option]}</label>
                </div>
              );
            })}
            <button type="submit" className="submit">&#8594;</button>
          </form>
        </div>
      );
    }

    return (
      <div>
        {showQuestion}
      </div>
    );
  }

export default Questions;