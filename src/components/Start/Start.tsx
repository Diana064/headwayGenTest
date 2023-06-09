import React from 'react';
import { useDispatch } from 'react-redux';
import { startGame } from '../../reducers/gameReducer';
import questionData from '../../data/questionData.json';

export interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
  prize: string;
}

const StartGame = () => {
  const dispatch = useDispatch();

  const handleStartGame = () => {
    const questionsData: Question[] = questionData.questions;
    dispatch(startGame(questionsData));
  };

  return (
    <div>
      <h2>Welcome to "Who Wants to Be a Millionaire"</h2>
      <button onClick={handleStartGame}>Start Game</button>
    </div>
  );
};

export default StartGame;
