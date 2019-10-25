const { BrandStatement } = require("../models")

const getAllBrandStatements = (req, res) => {
  BrandStatement.findAll()
    .then(statement => {
      res.json(statement)
    })
    .catch(e => res.json({ error: e }))
}

const findBrandStatementById = (req, res) => {
  const id = req.params.id;
  BrandStatement.findByPk(id)
    .then(statement => res.json(statement))
    .catch(e => res.json({ error: e }))
}


module.exports = {
  getAllBrandStatements,
  findBrandStatementById
}