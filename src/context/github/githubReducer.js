import { SEARCH_USERS, CLEAR_USERS, GET_USER, GET_REPOS } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
      };

    case CLEAR_USERS:
      return {
        ...state,
        users: [],
      };
    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
      };
    default:
      return state;
  }
};
