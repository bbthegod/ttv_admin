import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the questionListView state domain
 */

const selectQuestionViewDomain = state =>
  state.questionListView || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by QuestionListView
 */

const makeSelectQuestionView = () =>
  createSelector(
    selectQuestionViewDomain,
    substate => substate,
  );

export default makeSelectQuestionView;
export { selectQuestionViewDomain };
