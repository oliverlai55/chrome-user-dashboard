import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';

const ROOT_URL = '';

export function fetchData() {
  const request = axios.get({ROOT_URL})

  return {
    type: FETCH_DATA,
    payload: request
  };
}
