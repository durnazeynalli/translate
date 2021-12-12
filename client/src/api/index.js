import axios from 'axios';

const API = axios.create({ 
    baseURL: 'https://global-translation.herokuapp.com/'
 });

export const getHomepageDB = () => API.get('/home');