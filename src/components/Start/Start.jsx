import Play from 'components/Play/Play.tsx';
import React, { useState } from 'react';

export const Start = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const startGame = () => {
    setIsGameStarted(true);
  };

  return (
    <div>
      {!isGameStarted && (
        <div>
          <h2>Вітаємо! Почніть гру</h2>
          <button onClick={startGame}>Почати гру</button>
        </div>
      )}
      {isGameStarted && <Play />}
    </div>
  );
};
