import { Dispatch } from 'redux';

import { fetchPosts, createPost } from 'api';
import { FETCH_ALL, CREATE } from 'reducers/posts';
import Post from 'types/Post';

export const getPosts = () => async (dispatch: Dispatch) => {
  try {
    const { data } = await fetchPosts();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log('Unexpected error');
    }
  }
};

export const savePost = (post: Post) => async (dispatch: Dispatch) => {
  try {
    const { data } = await createPost(post);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log('Failed to save post');
  }
};
