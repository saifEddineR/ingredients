const Ingredient = require('../models/ingredientSchema')

// path : /ingredients/addingredient
// access : user/auth
const addIngredient = async(req,res) => {
  try {
    const newIngredient = await Ingredient.create({...req.body})
    res.json(newIngredient)
  } catch (error) {
    res.status(500).json({msg:`server error :${error}`})
  }
}

module.exports = {addIngredient}