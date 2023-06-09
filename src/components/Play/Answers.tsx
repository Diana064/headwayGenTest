import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setAnswer,
  setCurrentQuestion,
  setPrize,
} from '../../actions/gameActions';
import { RootState } from '../../reducers/gameReducer';

const Options = () => {
  const currentQuestion = useSelector(
    (state: RootState) => state.currentQuestion
  );
  const questionsData = useSelector((state: RootState) => state.questionsData);
  const answer = useSelector((state: RootState) => state.answer);
  const dispatch = useDispatch();

  const handleOptionClick = (option: string) => {
    // Provide type annotation for the 'option' parameter
    if (option === questionsData.questions[currentQuestion].correctAnswer) {
      const prize = questionsData.questions[currentQuestion].prize;
      dispatch(setPrize(prize));
      dispatch(setAnswer(option));

      if (currentQuestion === questionsData.questions.length - 1) {
        console.log('Congratulations! You won $1,000,000!');
      } else {
        dispatch(setCurrentQuestion(currentQuestion + 1));
      }
    } else {
      console.log('Game over! You did not win the million dollars.');
    }
  };

  return (
    <div>
      <h3>Options:</h3>
      {questionsData.questions[currentQuestion].options.map(
        (
          option: string,
          index: number // Provide type annotations for 'option' and 'index' parameters
        ) => (
          <button
            key={index}
            onClick={() => handleOptionClick(option)}
            disabled={answer !== null}
          >
            {option}
          </button>
        )
      )}
    </div>
  );
};

export default Options;
