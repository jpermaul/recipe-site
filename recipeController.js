const Recipe = require('../models/Recipe');

function createRecipe(req, res) {
  Recipe.create(req.body)
    .then(recipe => {
      res.status(201).json({
        status: 'success',
        data: { recipe }
      });
    })
    .catch(err => {
      res.status(400).json({
        status: 'fail',
        message: err.message
      });
    });
}


function deleteRecipe(req, res) {
  Recipe.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(204).json({
        status: 'success',
        data: null
      });
    })
    .catch(err => {
      res.status(404).json({
        status: 'fail',
        message: 'Recipe not found'
      });
    });
}

module.exports = {
  createRecipe,
  deleteRecipe,
};
