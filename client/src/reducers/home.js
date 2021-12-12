import {
    GET_HOMEPAGE_DB
} from '../constants/actionTypes';

const initialState = {
    home: null
};
  
function homeReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
      case GET_HOMEPAGE_DB:
        return {
          ...state,
          home: payload
        };
      default:
        return state;
    }

  }
  
  export default homeReducer;