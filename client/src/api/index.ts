import axios from 'axios';

const BASE_URL = 'http://localhost:8000';

export const fetchPosts = () => axios.get(`${BASE_URL}/posts`);
