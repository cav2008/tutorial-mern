import React from 'react';
import { useAppSelector } from 'hooks/reduxHooks';

import Post from './Post';

import useStyles from './Posts.styles';

const Posts = (): React.ReactElement => {
  const classes = useStyles();
  const posts = useAppSelector((state) => state.posts);

  return (
    <>
      <h1>Posts</h1>
      <Post />
      <Post />
    </>
  );
};

export default Posts;
