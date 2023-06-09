// import { createSlice, createSelector, PayloadAction } from '@reduxjs/toolkit';
// import { RootState } from './index';

// interface GameState {
//   level: number;
//   questions: Question[];
// }

// interface Question {
//   question: string;
//   options: string[];
//   correctAnswer: string;
//   prize: string;
// }

// const initialState: GameState = {
//   level: 1,
//   questions: [],
// };

// const gameSlice = createSlice({
//   name: 'game',
//   initialState,
//   reducers: {
//     startGame(state) {
//       state.level = 1;
//       // Additional actions for game start
//     },
//     setQuestions(state, action: PayloadAction<Question[]>) {
//       state.questions = action.payload;
//     },
//     // Add other game-related reducers here
//   },
// });

// export const { startGame, setQuestions } = gameSlice.actions;

// // Selector to access questions from the game state
// export const selectQuestions = createSelector(
//   (state: RootState) => state.game.questions,
//   questions => questions
// );

// export default gameSlice.reducer;
