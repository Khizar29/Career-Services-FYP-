// reducers.js
import { combineReducers } from 'redux';
import { SET_JOB_DATA, RESET_JOB_DATA } from './actionTypes';

const initialState = {
  jobData: null,
};

const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_JOB_DATA:
      return {
        ...state,
        jobData: action.payload,
      };
    case RESET_JOB_DATA:
      return {
        ...state,
        jobData: null,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  job: jobReducer,
});

export default rootReducer;
