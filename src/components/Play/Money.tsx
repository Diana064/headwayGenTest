import React from 'react';
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
  currentQuestion: Question;
}

export const Money: React.FC<MoneyProps> = ({
  questions,
  isQuestionAnswered,
  isActiveQuestion,
  currentQuestion,
}) => {
  return (
    <div className="sidebar">
      <h3>Сума</h3>
      <ul>
        {questions.map((question, index) => (
          <li
            key={index}
            className={
              isQuestionAnswered(index)
                ? 'answered'
                : isActiveQuestion(index)
                ? 'current'
                : ''
            }
          >
            {question.prize}
          </li>
        ))}
      </ul>
      <p>Поточна сума: {currentQuestion.prize}</p>
    </div>
  );
};
