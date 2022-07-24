import React from 'react';

import Post from './Post';

import useStyles from './Posts.styles';

const Posts = (): React.ReactElement => {
  const classes = useStyles();

  return (
    <>
      <h1>Posts</h1>
      <Post />
      <Post />
    </>
  );
};

export default Posts;
