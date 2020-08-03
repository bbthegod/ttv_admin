import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the problemView state domain
 */

const selectProblemViewDomain = state => state.problemView || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ProblemView
 */

const makeSelectProblemView = () =>
  createSelector(
    selectProblemViewDomain,
    substate => substate,
  );

export default makeSelectProblemView;
export { selectProblemViewDomain };
