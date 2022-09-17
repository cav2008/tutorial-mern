import axios from 'axios';
import Post from 'types/Post';

const BASE_URL = 'http://localhost:8000/posts';

export const fetchPosts = () => axios.get(BASE_URL);

export const createPost = (newPost: Post) => axios.post(BASE_URL, newPost);
