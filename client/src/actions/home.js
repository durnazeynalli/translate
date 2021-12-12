import axios from 'axios';
// import api from '../api/index';

import {
    GET_HOMEPAGE_DB
  } from '../constants/actionTypes';

// Get core
export const getHomeDB = () => async dispatch => {
    const config = {
        headers: {
            'Accept-Language': 'EN'
        }
      };
    

  try {
    const res = await axios.get('https://global-translation.herokuapp.com/home', config);

    dispatch({
      type: GET_HOMEPAGE_DB,
      payload: res.data
    });

  } catch (err) {
    console.log(err);
  }
};