import {LOADING, GET_PEOPLE} from '../actions/actions';
import { combineReducers } from 'redux';

const getPeople = (state = [], action) => {
  switch (action.type) {
    case GET_PEOPLE:
      return action.payload
  }
  return state;
}

const loading = (state = true, action) => {
  switch (action.type) {
    case LOADING:
      return action.payload
  }
  return state;
}

const reducers = combineReducers({
  people: getPeople,
  loading: loading,
});

export default reducers;
