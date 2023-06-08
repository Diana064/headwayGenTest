import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/index';
import { answerSelected, restartGame, setLevel } from '../../store/playSlice';
import { Money } from './Money';
import { QuizQuestion } from './Question';
import End from '../End/End';
import { PlayContent, PlayContentWrapper } from './Play.module';
import { selectQuestions } from '../../store/gameSlice';
import { setQuestions } from '../../store/gameSlice';
import questionData from '../question.json';

interface PlayProps {
  onRestart: () => void;
}

const Play: React.FC<PlayProps> = ({ onRestart }) => {
  const dispatch = useDispatch();
  const { score, selectedAnswer, prize, showGameOver, level } = useSelector(
    (state: RootState) => state.play
  );
  const questions = useSelector(selectQuestions);
  const currentQuestion = level ? questions[level - 1] : null;

  const handleSelectAnswer = (answer: string | null) => {
    if (selectedAnswer === null && answer !== null) {
      dispatch(answerSelected(answer));
    }
  };

  const isQuestionAnswered = (questionIndex: number) => {
    return questionIndex < (level ?? 1) - 1;
  };

  const isActiveQuestion = (questionIndex: number) => {
    return questionIndex === (level ?? 1) - 1;
  };

  useEffect(() => {
    dispatch(setQuestions(questionData.questions));
  }, [dispatch]);

  useEffect(() => {
    if (selectedAnswer !== null) {
      const timer = setTimeout(() => {
        dispatch(setLevel((level ?? 1) + 1));
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [selectedAnswer, level, dispatch]);

  const handleRestartGame = () => {
    dispatch(restartGame());
    onRestart();
  };

  return (
    <PlayContent>
      {level <= questions.length && !showGameOver ? (
        <PlayContentWrapper>
          <Money
            questions={questions}
            isQuestionAnswered={isQuestionAnswered}
            isActiveQuestion={isActiveQuestion}
            currentQuestion={currentQuestion}
          />
          {currentQuestion !== null ? (
            <QuizQuestion
              handleSelectAnswer={handleSelectAnswer}
              isActiveQuestion={isActiveQuestion}
              questions={questions}
              currentQuestion={currentQuestion}
              level={level}
            />
          ) : null}
        </PlayContentWrapper>
      ) : (
        <End prize={prize} onRestart={handleRestartGame} />
      )}
    </PlayContent>
  );
};

export default Play;
