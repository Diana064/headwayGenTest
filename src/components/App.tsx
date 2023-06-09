import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/configureStore';
import StartGame from '../components/Start/Start';
import Game from '../components/Play/Play';
import { useSelector } from 'react-redux';
import { RootState } from '../reducers/gameReducer'; // Update with the correct path to your reducer file

const App = () => {
  const isGameStarted = useSelector(
    (state: RootState) => state.currentQuestion > 0
  );

  return (
    <Provider store={store}>
      <div>
        <h1>Who Wants to Be a Millionaire</h1>
        {isGameStarted ? <Game /> : <StartGame />}
      </div>
    </Provider>
  );
};

export default App;
