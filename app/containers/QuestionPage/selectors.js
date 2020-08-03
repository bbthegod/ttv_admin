import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the questionPage state domain
 */

const selectQuestionPageDomain = state => state.questionPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by QuestionPage
 */

const makeSelectQuestionPage = () =>
  createSelector(
    selectQuestionPageDomain,
    substate => substate,
  );

export default makeSelectQuestionPage;
export { selectQuestionPageDomain };
