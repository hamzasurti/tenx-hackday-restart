import { createSelector } from 'reselect';

/**
 * Direct selector to the submissionPage state domain
 */
const selectSubmissionPageDomain = () => (state) => state.get('submissionPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by SubmissionPage
 */

const makeSelectSubmissionPage = () => createSelector(
  selectSubmissionPageDomain(),
  (substate) => substate.toJS()
);

export default makeSelectSubmissionPage;
export {
  selectSubmissionPageDomain,
};
