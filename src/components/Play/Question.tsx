import React, { useState, useEffect } from 'react';
import { Answers } from './Answers';
interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
  prize: string;
}
interface QuestionProps {
  currentQuestion: Question;
  isActiveQuestion: (questionIndex: number) => boolean;
  handleSelectAnswer: (answer: string | null) => void;
  questions: Question[];
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
