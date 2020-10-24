module.exports = (request) => async (req, res, next) => {
  try {
    console.log('entered');
    return request(req, res);
  } catch (error) {
    console.log('caught error');
    next(error);
  }
};
