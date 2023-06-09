import React from 'react';
import { useSelector } from 'react-redux';
import Question from './Question';
import Options from './Answers';
import Prize from './Money';
import EndGame from 'components/End/End';
import { RootState } from '../../reducers/gameReducer';
const Game = () => {
  const currentQuestion = useSelector(
    (state: RootState) => state.currentQuestion
  );
  const questionsData = useSelector((state: RootState) => state.questionsData);
  const isGameOver = currentQuestion === questionsData.questions.length;

  if (isGameOver) {
    return <EndGame />;
  }

  return (
    <div>
      <Question />
      <Options />
      <Prize />
    </div>
  );
};

export default Game;
