
import { fromJS } from 'immutable';
import gradingPageReducer from '../reducer';

describe('gradingPageReducer', () => {
  it('returns the initial state', () => {
    expect(gradingPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
