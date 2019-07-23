import axios from 'axios';

// Exporting our actions
export const LOADING = 'LOADING';
export const GET_PEOPLE = 'GET_PEOPLE';
export const GET_PERSON = 'GET_PERSON';
export const CHOOSE_PERSON = 'CHOOSE_PERSON';
export const GET_CHILDREN = 'GET_CHILDREN';
const domain = 'http://192.168.0.117:3000/api/'

// export const getChilldrenData = (url) => {
//     return (dispatch) => {
//         const request = axios.get(url);
//         request.then((response) => {
//             dispatch(loading(false));
//             dispatch(fetchPerson(response.data.person));
//         })
//     }
// }
//
// export const getChilldren = (children) => {
//     return (dispatch) => {
//
//     }
// }


export const choosePerson = (person) => {
    return (dispatch) => {
        const request = axios.get(domain + 'person/' + person._id);
        request.then((response) => {
            dispatch(loading(false));
            dispatch(fetchPerson(response.data.person));
        })
    }
}


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

export function fetchPerson(data) {
    return{
        type: GET_PERSON,
        payload: data,
    }
}

export function fetchPersonData(url) {
  return (dispatch) => {
      const request = axios.get(url);
      request.then((response) => {
          dispatch(loading(false));
          dispatch(fetchPerson(response.data.person));
      })
  }
}

// This is a redux thunk that will fetch our model data
export function peopleFetchData(url) {
    return (dispatch) => {
        const request = axios.get(domain + 'people');
        request.then((response) => {
            dispatch(fetchPeople(response.data.people));
            dispatch(loading(false));
        });
    };
}
