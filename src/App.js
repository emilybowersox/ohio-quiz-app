// import React from 'react';
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  //an array of questions
  const questions = [
      //each question is an object with the properties of question and answer options
    { questionText: 'What is the capital of Ohio?',
      //answerOptions is an array of answerOption objects with text and isCorrect properties
      answerOptions: [
        { answerText: 'Dublin', isCorrect: false },
        { answerText: 'Columbus', isCorrect: true },
        { answerText: 'Cleveland', isCorrect: false },
        { answerText: 'Cincinnati', isCorrect: false },
      ], },

    { questionText: 'What is the birthplace of twenty one pilots?',
      answerOptions: [
        { answerText: 'Sandusky', isCorrect: false },
        { answerText: 'Cincinnati', isCorrect: false },
        { answerText: 'Columbus', isCorrect: true },
        { answerText: 'Troy', isCorrect: false },
      ], },

    { questionText: 'In what Ohio city did Jeni\'s founder, Jeni Britton Bauer, begin her ice cream empire?',
      answerOptions: [
        { answerText: 'Columbus', isCorrect: true },
        { answerText: 'Xenia', isCorrect: false },
        { answerText: 'Cleveland', isCorrect: false },
        { answerText: 'Hilliard', isCorrect: false },
      ], },

    { questionText: 'The nationally award winning Columbus zoo resides in which city?',
      answerOptions: [
        { answerText: 'New Albany', isCorrect: false },
        { answerText: 'Worthington', isCorrect: false },
        { answerText: 'Cincinnati', isCorrect: false },
        { answerText: 'Columbus', isCorrect: true },
      ], },
  ];

  //need to declare what question the user is on, if they still have
  //questions to go, and how many questions they've gotten right

  //we have declared three state variables
  // "The array destructuring syntax lets us give different names to the state
  // variables we declared by calling useState. These names aren’t a part of the
  // useState API. Instead, React assumes that if you call useState many times,
  // you do it in the same order during every render."
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showFinalScore, setShowFinalScore] = useState(false);
  const [userScore, setUserScore] = useState(0);

  const handleClickAnswerOptions = (isCorrect) ==> {
    if (isCorrect) {
        setUserScore(userScore + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
  } else {
      setShowFinalScore(true);
  }
  };

  return (
      <div className={'app'}>
        {/* HINT: replace "false" with logic to display the
      score when the user has answered all the questions */}

        {/*{false ? (*/}
        {/*    <div className='user-score'>You scored 1 out of {questions.length}</div>*/}
        {/*) : (*/}
        {/*    <>*/}

        <div className={'question-title'}>
            <div className={'question-count'}>
              <span>Question that user is on</span>/{questions.length}
            </div>
            <div className={'question-text'}>
              Will get text from questions array here
            </div>
        </div>

        <div className={'question-answers'}>
          <button>answer text here</button>
          <button>answer text here</button>
          <button>answer text here</button>
          <button>answer text here</button>
        </div>


       {/*</>*/}
       {/* )}*/}

      </div>
  );
}

export default App;
