const express = require('express')
const { addIngredient } = require( '../controllers/ingredientController' )
const router = express.Router()

router.post('/addingredient',addIngredient)

module.exports = router