import { createStore } from 'redux';
import gameReducer from '../reducers/gameReducer';

// Create Redux store
export const store = createStore(gameReducer);
