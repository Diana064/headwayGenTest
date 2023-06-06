import React, { useState, useEffect } from 'react';
import questionData from '../question.json';
import { Money } from './Money';
import { Question } from './Question';

interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
  prize: string;
}

interface PlayProps {}

const Play: React.FC<PlayProps> = () => {
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [prize, setPrize] = useState<string>('0');

  const questions: Question[] = questionData.questions;
  const currentQuestion: Question = questions[level - 1];

  const handleSelectAnswer = (answer: string | null) => {
    if (selectedAnswer === null) {
      setSelectedAnswer(answer);
      if (answer === currentQuestion.correctAnswer) {
        setScore(score + 1);
        setPrize(currentQuestion.prize);
      } else {
        setLevel(questions.length + 1);
      }
    }
  };

  const isQuestionAnswered = (questionIndex: number): boolean => {
    return questionIndex < level - 1;
  };

  const isActiveQuestion = (questionIndex: number): boolean => {
    return questionIndex === level - 1;
  };

  useEffect(() => {
    if (selectedAnswer !== null) {
      const timer = setTimeout(() => {
        setSelectedAnswer(null);
        setLevel(level + 1);
      }, 2000); // Измените задержку в миллисекундах по своему усмотрению
      return () => clearTimeout(timer);
    }
  }, [selectedAnswer, level]);

  return (
    <div>
      <h1>Гра "Хто хоче стати мільйонером"</h1>
      {level <= questions.length ? (
        <div>
          <Money
            questions={questions}
            isQuestionAnswered={isQuestionAnswered}
            isActiveQuestion={isActiveQuestion}
            currentQuestion={currentQuestion}
          />
          <Question
            handleSelectAnswer={handleSelectAnswer}
            isActiveQuestion={isActiveQuestion}
            questions={questions}
            currentQuestion={currentQuestion}
            level={level}
          />
        </div>
      ) : (
        <div>
          <div className="result-screen">
            <h2>Гра завершена</h2>
            <p>Ваш рахунок: {prize}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Play;
