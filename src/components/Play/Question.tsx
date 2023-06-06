import React from 'react';
import { Answers } from './Answers';
interface QuestionInterface {
  question: string;
  options: string[];
  correctAnswer: string;
  prize: string;
}
interface QuestionProps {
  currentQuestion: QuestionInterface;
  isActiveQuestion: (questionIndex: number) => boolean;
  handleSelectAnswer: (answer: string | null) => void;
  questions: QuestionInterface[];
  level: number;
}
export const Question: React.FC<QuestionProps> = ({
  currentQuestion,
  handleSelectAnswer,
  isActiveQuestion,

  level,
}) => {
  return (
    <div className="question">
      <h2>{currentQuestion.question}</h2>
      <Answers
        currentQuestion={currentQuestion}
        handleSelectAnswer={handleSelectAnswer}
        isActiveQuestion={isActiveQuestion}
        level={level}
      />
    </div>
  );
};
