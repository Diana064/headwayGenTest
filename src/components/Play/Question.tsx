import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers/gameReducer';
const Question = () => {
  const currentQuestion = useSelector(
    (state: RootState) => state.currentQuestion
  );
  const questionsData = useSelector((state: RootState) => state.questionsData);

  return (
    <div>
      <h2>Question {currentQuestion + 1}</h2>
      <p>{questionsData.questions[currentQuestion].question}</p>
    </div>
  );
};

export default Question;
