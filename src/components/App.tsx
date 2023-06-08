import React, { useState } from 'react';
import Start from './Start/Start';
import Play from './Play/Play';

const App = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const handleStartGame = () => {
    setIsGameStarted(true);
  };

  const handleRestartGame = () => {
    setIsGameStarted(false);
  };

  return (
    <>
      {isGameStarted ? (
        <Play onRestart={handleRestartGame} />
      ) : (
        <Start onStartGame={handleStartGame} />
      )}
    </>
  );
};

export default App;
