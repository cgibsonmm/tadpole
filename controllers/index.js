const {keywords} = require('../models')

const createKeyword = async (req, res) => {
    try {
        const word = await keywords.create(req.body);
        return res.status(200).json()
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

const getAllKeywords = async (req,res) => {
    try {
        const words = await keywords.findAll()
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

const updateKeyword = async (req, res) => {
    try {
      const { id } = req.params;
      const [updated] = await keywords.update(req.body, {
        where: { id: id }
      });
      if (updated) {
        const updatedWord = await keywords.findOne(
            { 
                where: { id: id } 
            }
            );
        return res.status(200).json({ word: updatedWord });
      }
      throw new Error('keywords not found');
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };


  module.exports = {
    createKeyword,
    getAllKeywords,
    updateKeyword
  }