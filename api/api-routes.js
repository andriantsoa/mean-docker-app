// Initialize express router
let router = require('express').Router();

const homeRoute = require('./routes/default.route');
const userRoute = require('./routes/user.route');
const profilRoute = require('./routes/profil.route');
const candidatRoute = require('./routes/candidat.route');
const entrepriseRoute = require('./routes/entreprise.route');
router = homeRoute.addRoute(router);
router = userRoute.addRoute(router);
router = profilRoute.addRoute(router);
router = candidatRoute.addRoute(router);
router = entrepriseRoute.addRoute(router);

module.exports = router;
