const express = require('express');
const cors = require('cors');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
// const passport = require('passport');

require('dotenv').config();

require('./src/config/ddbb.config');
require('./src/passport/jwt.strategy');
require('./src/passport/local.strategy');

const cacaoRoutes = require('./src/routes/cacaosRouter');
const authRoutes = require('./src/routes/authRoutes');
const userRoutes = require('./src/routes/userRoutes');

const app = express();
const port = process.env.PORT || 4001;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', authRoutes);

app.use('/api/cacaos',
  cacaoRoutes);

app.use('/user',
  // passport.authenticate('jwt', { session: false }),
  userRoutes);

app.listen(
  port,
  () => debug(`Server is running on ${chalk.yellow(`http://localhost:${port}`)}`)
);
