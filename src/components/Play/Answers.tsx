import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/index';
import { answerSelected } from '../../store/playSlice';
import {
  AnswerButton,
  AnswerItemSymbol,
  AnswerList,
  AnswerListItem,
  AnswerItemText,
} from './Play.module';

export interface Question {
  level: number;
  question: string;
  options: string[];
  correctAnswer: string;
  prize: string;
}

interface AnswersProps {
  currentQuestion: Question;
  isActiveQuestion: (questionIndex: number) => boolean;
  level: number;
}

export const Answers: React.FC<AnswersProps> = ({
  currentQuestion,
  isActiveQuestion,
  level,
}) => {
  const dispatch = useDispatch();
  const selectedAnswer = useSelector(
    (state: RootState) => state.play.selectedAnswer
  );
  const [isAnswered, setIsAnswered] = useState(false);

  const handleAnswerClick = (option: string | null) => {
    if (!isAnswered) {
      if (option === currentQuestion?.correctAnswer) {
        setIsAnswered(true);
        dispatch(answerSelected(option));
      } else {
        setIsAnswered(true);
      }
    }
  };

  const shouldResetStyles = level !== currentQuestion?.level;

  return (
    <AnswerList>
      {currentQuestion.options.map((option, index) => {
        const isHovered = selectedAnswer !== option;
        let className = isHovered ? 'hovered' : '';

        if (selectedAnswer === option) {
          className += ' selected';

          if (
            isAnswered &&
            selectedAnswer === option &&
            level === currentQuestion.level
          ) {
            className +=
              option === currentQuestion.correctAnswer ? ' correct' : ' wrong';
          }
        }

        if (shouldResetStyles) {
          className = '';
        }

        return (
          <AnswerListItem key={index}>
            <AnswerButton
              onClick={() => handleAnswerClick(option)}
              className={className}
              disabled={isAnswered}
            >
              <AnswerItemText className={className}>
                <AnswerItemSymbol>
                  {String.fromCharCode(65 + index)}
                </AnswerItemSymbol>{' '}
                {option}
              </AnswerItemText>
            </AnswerButton>
          </AnswerListItem>
        );
      })}
    </AnswerList>
  );
};
