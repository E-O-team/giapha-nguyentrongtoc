import axios from 'axios';

// Exporting our actions
export const LOADING = 'LOADING';
export const GET_PEOPLE = 'GET_PEOPLE';

// An action to check if the recipes are loaded accepts true or false
export function loading(loading) {
  return {
    type: LOADING,
    payload: loading,
  };
}

// This will get the recipes from the API
export function fetchPeople(data) {
  return {
    type: GET_PEOPLE,
    payload: data,
  };
}

// This is a redux thunk that will fetch our model data
export function peopleFetchData(url) {
    return (dispatch) => {
        const request = axios.get(url);
        request.then((response) => {
            dispatch(loading(false));
            dispatch(fetchPeople(response.data.people));
        });
    };
}
