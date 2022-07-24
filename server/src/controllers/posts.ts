import { Request, Response } from 'express';

import PostMessage from '@models/postMessage';

const getErrorMessage = (error: unknown): string => {
  const errorMessage = error instanceof Error ? error.message : 'Something went wrong';

  return errorMessage;
};

export const getPosts = async (req: Request, res: Response): Promise<void> => {
  try {
    const postMessages = await PostMessage.find();

    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: getErrorMessage(error) });
  }
};

export const createPost = async (req: Request, res: Response): Promise<void> => {
  const post = req.body;

  const newPost = new PostMessage(post);

  try {
    await newPost.save();

    // for more information about http status codes https://www.restapitutorial.com/httpstatuscodes.html
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: getErrorMessage(error) });
  }
};
