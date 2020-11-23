const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const postsRoute = require('./routes/postsRoute');
const userRoute = require('./routes/userRoute');

dotenv.config();

require('./db/mongoose');

const app = express();

app.use(express.json());

app.use('/api/posts', postsRoute);
app.use('/api/user', userRoute);
app.use('/api', express.static(__dirname + '/images'));

if (process.env.NODE_ENV === 'production') {
  console.log(path.join(__dirname, '../client/dist/social-media'));

  app.use(express.static(path.join(__dirname, '/client/dist/social-media')));

  app.get('*', (req, res) => {
    res.sendFile(
      path.resolve(__dirname, 'client', 'dist', 'social-media', 'index.html')
    );
  });
} else {
  app.get('/', (req, res) => {
    res.send('api is running...');
  });
}

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server running on ${process.env.NODE_ENV} mode on port ${port}`);
});
