const { connect } = require('mongoose');
const debug = require('debug')('app:ddbb');

connect(
  process.env.DDBB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
).then(
  () => debug('Database connection stablished'),
  (error) => debug('Database connection error', error)
);
