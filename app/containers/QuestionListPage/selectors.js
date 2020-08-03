import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the questionListPage state domain
 */

const selectquestionListPageDomain = state =>
  state.questionListPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by questionListPage
 */

const makeSelectquestionListPage = () =>
  createSelector(
    selectquestionListPageDomain,
    substate => substate,
  );

export default makeSelectquestionListPage;
export { selectquestionListPageDomain };
