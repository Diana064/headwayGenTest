// // playSlice.ts
// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { RootState } from './index';

// interface PlayState {
//   score: number;
//   selectedAnswer: string | null;
//   prize: string;
//   showGameOver: boolean;
//   level: number;
// }

// const initialState: PlayState = {
//   score: 0,
//   selectedAnswer: null,
//   prize: '0',
//   showGameOver: false,
//   level: 1,
// };

// const playSlice = createSlice({
//   name: 'play',
//   initialState,
//   reducers: {
//     answerSelected(state, action: PayloadAction<string>) {
//       state.selectedAnswer = action.payload;
//       // Handle correct or wrong answer
//     },
//     restartGame(state) {
//       // Reset the state properties for game restart
//       state.score = 0;
//       state.selectedAnswer = null;
//       state.prize = '0';
//       state.showGameOver = false;
//       state.level = 1;
//     },
//     setLevel(state, action: PayloadAction<number>) {
//       state.level = action.payload;
//     },
//     // Add other play-related reducers here
//   },
// });

// export const { answerSelected, restartGame, setLevel } = playSlice.actions;

// export default playSlice.reducer;
