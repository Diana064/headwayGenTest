import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers/gameReducer';
const EndGame = () => {
  const prize = useSelector((state: RootState) => state.prize);

  return (
    <div>
      <h2>Game Over!</h2>
      <p>Unfortunately, you did not win the million dollars.</p>
      <p>Your final prize amount: {prize}</p>
    </div>
  );
};

export default EndGame;
