import axios from 'axios';

export const FETCH_PEOPLES = 'FETCH_PEOPLES';
export const FETCH_PEOPLE = 'FETCH_PEOPLE';

const ROOT_API = 'http://swapi.co/api';

export function fetchPeoples() {
  const request = axios.get(`${ROOT_API}/people`);

  return {
    type: FETCH_PEOPLES,
    payload: request
  }
}

export function fetchPeople(id) {
  const request = axios.get(`${ROOT_API}/people/${id}`);

  return {
    type: FETCH_PEOPLE,
    payload: request
  }
}
