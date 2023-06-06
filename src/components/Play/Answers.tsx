import React, { useState } from 'react';

interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
  prize: string;
}

interface AnswersProps {
  currentQuestion: Question;
  isActiveQuestion: (questionIndex: number) => boolean;
  handleSelectAnswer: (answer: string | null) => void;
  level: number; // Добавлено новое свойство level
}

export const Answers: React.FC<AnswersProps> = ({
  currentQuestion,
  isActiveQuestion,
  handleSelectAnswer,
  level,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const handleAnswerClick = (option: string) => {
    setSelectedAnswer(option);
    handleSelectAnswer(option);
  };

  return (
    <ul>
      {currentQuestion.options.map((option, index) => {
        const isAnsweredCorrectly =
          selectedAnswer === option && option === currentQuestion.correctAnswer;
        const isAnsweredIncorrectly =
          selectedAnswer === option && option !== currentQuestion.correctAnswer;
        const isHovered = selectedAnswer !== option;

        let className = '';
        if (isAnsweredCorrectly) {
          className = 'correct';
        } else if (isAnsweredIncorrectly) {
          className = 'wrong';
        } else if (isHovered) {
          className = 'hovered';
        }

        return (
          <li
            key={index}
            onClick={() => handleAnswerClick(option)}
            className={className}
          >
            <span>{String.fromCharCode(65 + index)}</span> {option}
          </li>
        );
      })}
    </ul>
  );
};
