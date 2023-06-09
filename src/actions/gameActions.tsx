import { Action } from 'redux';

// Action Types
export const SET_CURRENT_QUESTION = 'SET_CURRENT_QUESTION';
export const SET_ANSWER = 'SET_ANSWER';
export const SET_PRIZE = 'SET_PRIZE';
export const RESET_GAME = 'RESET_GAME';

// Action Creators
export interface SetCurrentQuestionAction
  extends Action<typeof SET_CURRENT_QUESTION> {
  payload: number;
}

export function setCurrentQuestion(
  questionIndex: number
): SetCurrentQuestionAction {
  return {
    type: SET_CURRENT_QUESTION,
    payload: questionIndex,
  };
}

export interface SetAnswerAction extends Action<typeof SET_ANSWER> {
  payload: string;
}

export function setAnswer(answer: string): SetAnswerAction {
  return {
    type: SET_ANSWER,
    payload: answer,
  };
}

export interface SetPrizeAction extends Action<typeof SET_PRIZE> {
  payload: string;
}

export function setPrize(prize: string): SetPrizeAction {
  return {
    type: SET_PRIZE,
    payload: prize,
  };
}

export interface ResetGameAction extends Action<typeof RESET_GAME> {}

export function resetGame(): ResetGameAction {
  return {
    type: RESET_GAME,
  };
}
