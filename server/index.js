/* eslint consistent-return:0 */

const express = require('express');
const logger = require('./logger');

const Mongo = require('mongodb');
const mongoose = require('mongoose');

const expressJwt = require('express-jwt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser')

const argv = require('minimist')(process.argv.slice(2));
const setup = require('./middlewares/frontendMiddleware');
const isDev = process.env.NODE_ENV !== 'production';
const ngrok = (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel ? require('ngrok') : false;
const resolve = require('path').resolve;
const app = express();

// If you need a backend, e.g. an API, add your custom backend-specific middleware here
// app.use('/api', myApi);

const User = require('./../modals/user');
const userModal = require('./../modals/user');


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/hackathonmanager', function(err, db) {
  console.log('Connected correctly to server and MongoDB. Mongo DB: hackaton');

  User.find().exec(function(err, users) {
    // console.log(users);
    console.log(users)
  }).catch((err) => {
    console.log('there was an error on find users')
  })
})

const secretToken = 'topSecret hack';

// app.use(expressJwt({
//         secret: secretToken,
//         getToken: function fromHeaderOrQuerystring(req) {
//             // console.log('req.cookies - ', req.name)
//             if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
//                 return req.headers.authorization.split(' ')[1];
//             } else if (req.cookies && req.cookies.token) {
//                 // console.log('req.cookies - ', req.cookies)
//                 return req.cookies.token;
//             }
//             return null;
//         }
//     })
//     .unless({
//         path: ['/login', '/createUser']
//     }))


// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

const port = argv.port || process.env.PORT || 3000;

// Start your app.
app.listen(port, host, (err) => {
  if (err) {
    return logger.error(err.message);
  }

  // Connect to ngrok in dev mode
  if (ngrok) {
    ngrok.connect(port, (innerErr, url) => {
      if (innerErr) {
        return logger.error(innerErr);
      }

      logger.appStarted(port, prettyHost, url);
    });
  } else {
    logger.appStarted(port, prettyHost);
  }
});
