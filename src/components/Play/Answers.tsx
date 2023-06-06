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

    // Задержка перед очисткой выбранного ответа и переходом к следующему вопросу
    setTimeout(() => {
      setSelectedAnswer(null);
      console.log('timeout');
      if (isActiveQuestion(level)) {
        handleSelectAnswer(null); // Очистка выбранного ответа перед переходом к следующему вопросу
      }
    }, 5000);
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
          className = 'incorrect';
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
