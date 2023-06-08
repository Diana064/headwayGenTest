import { Dispatch } from 'redux';
import { setQuestions } from './gameSlice';
import questionData from '../components/question.json';

interface QuestionData {
  question: string;
  options: string[];
  correctAnswer: string;
  prize: string;
}

export const loadQuestionsFromJson = () => {
  return async (dispatch: Dispatch) => {
    try {
      // Simulate an asynchronous API call to load the questions from JSON
      // Replace this with your actual API call or data loading logic
      const generatedQuestions: QuestionData[] = questionData.questions;

      dispatch(setQuestions(generatedQuestions));
    } catch (error) {
      // Handle error if needed
      console.error('Failed to load questions:', error);
    }
  };
};
