

exports.addRoute = (router) => {
  router.get('/', function (req, res) {
    res.json({
      status: 'API Its Working',
      message: 'Welcome to RESTHub crafted with love!'
    });
  });

  return router;
};