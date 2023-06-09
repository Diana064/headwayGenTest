import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers/gameReducer'; // Update with the correct import path

const Prize = () => {
  const prize = useSelector((state: RootState) => state.prize);

  return (
    <div>
      <h3>Current Prize:</h3>
      <p>{prize}</p>
    </div>
  );
};

export default Prize;
