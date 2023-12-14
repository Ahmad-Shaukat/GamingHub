const express = require('express')
const {restoreUser, requireAuth} = require('../../utils/auth')
const {sequelize, Purchase, Category} = require('../../db/models')
const router = express.Router()
const {Sequelize} = require('sequelize')






// get all the purchase belonging to the user
router.get('/current', restoreUser, async(req, res) => {
    let userId = req.user.dataValues.id
    const userPurchases = await Purchase.findAll({
        where:{userId: userId}
    })
    console.log (userId, '---------------this is the user')
    res.status(200).json(userPurchases)
})


// add the purchase 
router.post('/ye', requireAuth, async(req, res) => {
    let userId = req.user.dataValues.id
    let {name, store, date, type, category} = req.body


    // find the category 
    let categoryId = await Category.findOne({
        where:{name: category}
    })
    categoryId = categoryId.id
    const newPurchase = await Purchase.create({
       userId, categoryId, name, store, date, type, 
    })

    console.log (categoryId, '---------this is the purchase category')
    console.log(newPurchase, 'this is the new purchase--------------')
    res.status(200).json(newPurchase)
})

module.exports = router