const { Router } = require('express');
const routes = Router();
const controllers = require('../controllers')
const sentenceController = require('../controllers/sentences')

routes.get('/', controllers.getAllKeywords)
routes.post('/sentences', sentenceController.createSentence)

module.exports = routes;