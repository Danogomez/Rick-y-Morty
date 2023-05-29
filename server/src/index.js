const express = require('express');
const server = express();
const cors = require('cors');
const morgan = require('morgan');
const router = require('./routes/index');

server.use(express.json());
server.use(morgan('dev'));
server.use(cors());

server.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Credentials', 'true');
   res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
   );
   res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, DELETE'
   );
   next();
});

server.use('/rickandmorty', router);


const PORT = 3001
server.listen(3001, () => {
   console.log('Listening on port: ' + PORT);
});