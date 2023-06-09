import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Question } from 'components/Start/Start';
// State interface
interface GameState {
  currentQuestion: number;
  answer: string | null;
  prize: string;
  questionsData: any; // Update with the appropriate type for questionsData
}

// Initial state
const initialState: GameState = {
  currentQuestion: 0,
  answer: null,
  prize: '$0',
  questionsData: null,
  // Update with the appropriate initial data
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setCurrentQuestion: (state, action: PayloadAction<number>) => {
      state.currentQuestion = action.payload;
    },
    setAnswer: (state, action: PayloadAction<string>) => {
      state.answer = action.payload;
    },
    setPrize: (state, action: PayloadAction<string>) => {
      state.prize = action.payload;
    },
    resetGame: () => initialState,
    startGame: (state, action: PayloadAction<Question[]>) => {
      // Reset the game state to its initial values
      state.currentQuestion = 0;
      state.answer = null;
      state.prize = '$0';
      state.questionsData = action.payload;
    },
  },
});

// Extract action creators from the game reducer slice
export const {
  setCurrentQuestion,
  setAnswer,
  setPrize,
  resetGame,
  startGame, // Export the startGame action creator
} = gameSlice.actions;

// Create and export the game reducer
export default gameSlice.reducer;

// Export RootState type
export type RootState = ReturnType<typeof gameSlice.reducer>;
