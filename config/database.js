if (process.env.NODE_ENV === 'production') {
  module.exports = {
    mongoURI: 'mongoURI'
  };
} else {
  module.exports = { mongoURI: 'mongodb://localhost/vidjot-dev' };
}
