import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the interviewPage state domain
 */

const selectInterviewPageDomain = state => state.interviewPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by InterviewPage
 */

const makeSelectInterviewPage = () =>
  createSelector(
    selectInterviewPageDomain,
    substate => substate,
  );

export default makeSelectInterviewPage;
export { selectInterviewPageDomain };
