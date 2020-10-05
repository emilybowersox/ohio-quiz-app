import React from 'react';
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
  ]







}

export default App;
