import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the questionView state domain
 */

const selectQuestionViewDomain = state => state.questionView || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by QuestionView
 */

const makeSelectQuestionView = () =>
  createSelector(
    selectQuestionViewDomain,
    substate => substate,
  );

export default makeSelectQuestionView;
export { selectQuestionViewDomain };
