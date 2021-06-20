module.exports = {
  getProfile: (req, res) => {
    res.json({
      message: 'You made it to the secure route',
      user: req.user,
      token: req.headers.authorization
    });
  }
};
