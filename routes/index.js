const { Router } = require('express');
const routes = Router();
const controllers = require('../controllers')

routes.get('/', controllers.getAllKeywords)

module.exports = routes;