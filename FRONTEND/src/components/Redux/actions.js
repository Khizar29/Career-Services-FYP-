// actions.js
import { SET_JOB_DATA, RESET_JOB_DATA } from './actionTypes';

export const setJobData = (jobData) => ({
  type: SET_JOB_DATA,
  payload: jobData,
});

export const resetJobData = () => ({
  type: RESET_JOB_DATA,
});
