const { Router } = require('express');
const routes = Router();
const controllers = require('../controllers')
const sentenceController = require('../controllers/sentences')
const brandController = require('../controllers/brandStatement')

routes.get('/keywords', controllers.getAllKeywords)
routes.post('/sentences', sentenceController.createSentence)
routes.get('/brandstatements', brandController.getAllBrandStatements)
routes.get('/brandstatements/:id', brandController.findBrandStatementById)

module.exports = routes;