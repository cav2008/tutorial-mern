import { Dispatch } from 'redux';
import { fetchPosts } from 'api';
import { FETCH_ALL } from 'reducers/posts';

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
