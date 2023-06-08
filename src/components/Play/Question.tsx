import React, { useEffect } from 'react';
import { Answers, Question } from './Answers';
import { QuestionsWrapper, QuestionsTitle } from './Play.module';

interface QuestionProps {
  currentQuestion: Question;
  isActiveQuestion: (questionIndex: number) => boolean;
  handleSelectAnswer: (answer: string | null) => void;
  questions: Question[];
  level: number;
}

export const QuizQuestion: React.FC<QuestionProps> = ({
  currentQuestion,
  isActiveQuestion,
  handleSelectAnswer,
  questions,
  level,
}) => {
  useEffect(() => {
    // console.log(currentQuestion);
    // console.log(isActiveQuestion);
    // console.log(level);
  }, []);
  return (
    <QuestionsWrapper>
      <QuestionsTitle>{currentQuestion.question}</QuestionsTitle>
      <Answers
        currentQuestion={currentQuestion}
        isActiveQuestion={isActiveQuestion}
        level={level}
      />
    </QuestionsWrapper>
  );
};
