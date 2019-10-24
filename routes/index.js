const { Router } = require('express');
const routes = Router();
const controllers = require('../controllers')
const sentenceController = require('../controllers/sentences')
const brandController = require('../controllers/brandStatement')
const { BrandStatement, Sentence, Keyword, KeywordSentences, KeywordBrandStatement } = require('../models')


routes.get('/keywords', controllers.getAllKeywords)
// routes.post('/sentences', sentenceController.createSentence)
routes.get('/brandstatements', brandController.getAllBrandStatements)

// routes.get('/brandstatements/:id', brandController.findBrandStatementById)


routes.get("/brandstatements/:id", async (req, res) => {
  let id = parseInt(req.params.id)
  let brandStaement = await BrandStatement.findByPk(id)
  return res.json(brandStaement)
})

routes.put('/brandstatements/:id', async (req, res) => {
  try {
    const id = req.params.id
    let brandStatement = await BrandStatement.update(req.body, {
      where: { id: id }
    })
    return res.json(brandStatement)
  }
  catch (err) {
    return res.status(500).json({ err: err })
  }
})

routes.delete("/brandstatements/:id", async (req, res) => {
  try {
    let brandStaement = await BrandStatement.destroy({
      where: {
        id: req.params.id
      }
    })
    return res.json("Brand Statement was deleted :(")
  }
  catch (err) {
    return res.json(err)
  }
})

routes.get("/sentences/", async (req, res) => {
  let getSentence = await Sentence.findAll()
  return res.json(getSentence)
})

routes.get("/sentence/:id", async (req, res) => {
  let id = parseInt(req.params.id)
  let getSentence = await Sentence.findByPk(id)
  return res.json(getSentence)
})

routes.put('/sentence/:id', async (req, res) => {
  try {
    const id = req.params.id
    let updateSentence = await Sentence.update(req.body, {
      where: { id: id }
    })
    return res.json(updateSentence)
  }
  catch (err) {
    return res.status(500).json({ err: err })
  }
})

routes.delete("/sentence/:id", async (req, res) => {
  try {
    let deleteSentence = await Sentence.destroy({
      where: {
        id: req.params.id
      }
    })
    return res.json("Sentence was deleted :(")
  }
  catch (err) {
    return res.json(err)
  }
})

routes.get("/keyword/:id", async (req, res) => {
  let id = parseInt(req.params.id)
  let getKeyword = await Keyword.findByPk(id)
  return res.json(getKeyword)
})

routes.put('/keyword/:id', async (req, res) => {
  try {
    const id = req.params.id
    let updateKeyword = await Keyword.update(req.body, {
      where: { id: id }
    })
    return res.json(updateKeyword)
  }
  catch (err) {
    return res.status(500).json({ err: err })
  }
})

routes.delete("/keyword/:id", async (req, res) => {
  try {
    let deleteSentence = await Keyword.destroy({
      where: {
        id: req.params.id
      }
    })
    return res.json("Keyword was deleted :(")
  }
  catch (err) {
    return res.json(err)
  }
})


routes.get('/allsentenceswithkeyword/:body', (req, res) => {
  let keywords = req.params.body.split(',')
  let obj = []
  keywords.forEach((item, idx) => {
    Keyword.findByPk(item).then(ret => {
      ret.getSentences().then(sentence => {
        obj.push(sentence)
        if (obj.length === 3) {
          res.json(obj)
        }
      })
    })
  })
})

routes.post('/createbrandstatement', async (req, res) => {
  let params = req.body;
  let statement = params.statement
  let keywords = params.keywords
  let created = []

  // console.log({ req.body }
  BrandStatement.create({
    statement: statement
  }).then(newStatement => {
    keywords.forEach(keyword => {
      let obj = {
        brandstatement_id: newStatement.id,
        keyword_id: keyword
      }
      KeywordBrandStatement.create(obj).then(r => {
        created.push(r)
        if (created.length === 3) {
          res.json(newStatement)
        }
      })
    })
  })
    .catch(e => console.log(e))
})

routes.get('/brandstatement/:id', (req, res) => {
  let id = req.params.id
  BrandStatement.findByPk(id)
    .then(statement => res.json(statement))
    .catch(e => res.json(e))
})

routes.put('/brandstatement/:id', (req, res) => {
  let id = req.params.id
  let statement = req.body.statement
  BrandStatement.update(req.body, {
    where: {
      id: id
    },
  })
    .then(statement => res.json(statement))
    .catch(e => res.json(e))
})
module.exports = routes;