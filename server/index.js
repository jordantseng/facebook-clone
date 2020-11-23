const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const postsRoute = require('./routes/postsRoute');
const userRoute = require('./routes/userRoute');

dotenv.config();

require('./db/mongoose');

const app = express();

app.use(express.json());

__dirname = path.resolve();
app.use('/api/posts', postsRoute);
app.use('/api/user', userRoute);
app.use('/api', express.static(__dirname + '/server/images'));

if (process.env.NODE_ENV === 'production') {
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

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`);
});
