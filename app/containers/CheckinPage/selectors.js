import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the checkinPage state domain
 */

const selectInterviewPageDomain = state => state.checkinPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by CheckinPage
 */

const makeSelectInterviewPage = () =>
  createSelector(
    selectInterviewPageDomain,
    substate => substate,
  );

export default makeSelectInterviewPage;
export { selectInterviewPageDomain };
