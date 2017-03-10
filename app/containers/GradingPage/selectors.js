import { createSelector } from 'reselect';

/**
 * Direct selector to the gradingPage state domain
 */
const selectGradingPageDomain = () => (state) => state.get('gradingPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by GradingPage
 */

const makeSelectGradingPage = () => createSelector(
  selectGradingPageDomain(),
  (substate) => substate.toJS()
);

export default makeSelectGradingPage;
export {
  selectGradingPageDomain,
};
