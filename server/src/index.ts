import 'module-alias/register';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postsRoutes from '@routes/posts';

const app = express();
const PORT = process.env.PORT || 8000;
// connect to mongodb atlas.
const DB_URL =
  'mongodb+srv://tutorial-mern:<password>@cluster0.lflbvty.mongodb.net/?retryWrites=true&w=majority';

// parses our body requests.
app.use(bodyParser.json({ limit: '30mb' }));
app.use(bodyParser.urlencoded({ limit: '30mb' }));
// allows cors.
app.use(cors());
// our routes.
app.use('/posts', postsRoutes);

// connect to mongoDB
mongoose
  .connect(DB_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });
