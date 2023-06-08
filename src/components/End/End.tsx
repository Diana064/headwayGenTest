import React from 'react';
import { ReactComponent as HandDescSvg } from '../image/start/handDesc.svg';
import { Button } from '../App.module';
import { EndContent, EndPrize, EndTitle, EndWrapper } from './End.module';

interface EndProps {
  prize: string;
  onRestart: () => void;
}

const End: React.FC<EndProps> = ({ prize, onRestart }) => {
  return (
    <EndWrapper>
      <HandDescSvg />
      <EndContent>
        <EndTitle>Total score:</EndTitle>
        <EndPrize>{prize} earned</EndPrize>
        <Button onClick={onRestart}>Try again</Button>
      </EndContent>
    </EndWrapper>
  );
};

export default End;
