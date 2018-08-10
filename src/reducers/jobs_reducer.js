import {
  FETCH_JOBS,
} from '../constants';

const INITIAL_STATE = {
  data: []
};
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_JOBS:
      return action.payload;
    default:
      return state;
  }
}
