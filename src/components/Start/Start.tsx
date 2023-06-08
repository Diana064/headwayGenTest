import React from 'react';
import { useDispatch } from 'react-redux';
import { startGame } from '../../store/gameSlice';
import {
  StartContainer,
  StartContent,
  StartMainText,
  StartTitle,
} from './Start.module';
import { ReactComponent as HandDescSvg } from '../image/start/handDesc.svg';
import { Button } from '../App.module';

interface StartProps {
  onStartGame: () => void;
}

const Start: React.FC<StartProps> = ({ onStartGame }) => {
  const dispatch = useDispatch();

  const handleStartGame = () => {
    dispatch(startGame());
    onStartGame();
  };

  return (
    <StartContainer>
      <StartContent>
        <HandDescSvg />
        <StartMainText>
          <StartTitle>Who wants to be a millionaire?</StartTitle>
          <Button onClick={handleStartGame}>Start</Button>
        </StartMainText>
      </StartContent>
    </StartContainer>
  );
};

export default Start;
