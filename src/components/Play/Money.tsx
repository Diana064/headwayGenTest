import React from 'react';
import { MoneyList, MoneyItem, MoneyItemNumber } from './Play.module';

interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
  prize: string;
}
interface MoneyProps {
  questions: Question[];
  isQuestionAnswered: (questionIndex: number) => boolean;
  isActiveQuestion: (questionIndex: number) => boolean;
  currentQuestion: Question | null;
}

export const Money: React.FC<MoneyProps> = ({
  questions,
  isQuestionAnswered,
  isActiveQuestion,
  currentQuestion,
}) => {
  return (
    <MoneyList>
      {questions.map((question, index) => (
        <MoneyItem
          key={index}
          className={`${
            isQuestionAnswered(index)
              ? 'answered'
              : isActiveQuestion(index)
              ? 'current'
              : ''
          } `}
        >
          <MoneyItemNumber
            className={`${
              isQuestionAnswered(index)
                ? 'answered'
                : isActiveQuestion(index)
                ? 'current'
                : ''
            } `}
          >
            {question.prize}
          </MoneyItemNumber>
        </MoneyItem>
      ))}
    </MoneyList>
  );
};
