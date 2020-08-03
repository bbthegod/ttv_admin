import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the problemPage state domain
 */

const selectProblemPageDomain = state => state.problemPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ProblemPage
 */

const makeSelectProblemPage = () =>
  createSelector(
    selectProblemPageDomain,
    substate => substate,
  );

export default makeSelectProblemPage;
export { selectProblemPageDomain };
