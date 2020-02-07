import axios from 'axios';

const instance = axios.create({
	baseURL: process.env.REACT_APP_POSTS_URL // https://jsonplaceholder.typicode.com
});

export default instance;
