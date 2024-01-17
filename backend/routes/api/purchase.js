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
    console.log (userPurchases, '-------------these are user purchases')
    res.status(200).json(userPurchases)
})


// add the purchase 
router.post('/new', requireAuth, async(req, res) => {
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


// Edit a purchase

router.put('/:purchaseId', requireAuth, async(req, res) => {
    let userId = req.user.dataValues.id
    let {name, store, date, type, category} = req.body
    let purchaseId = req.params.purchaseId
    let newPurchase = await Purchase.findByPk(purchaseId)

newPurchase.set({
        name, store, date, type, category
    }, {fields: ['name', 'store', 'date', 'type', 'category']})
    await newPurchase.save()
    res.json(newPurchase)
    console.log (newPurchase)
    res.status(200)
})

// Delete a purchase 
router.delete('/:purchaseId/delete', requireAuth, async(req, res) => {
    let userId = req.user.dataValues.id
    let purchaseId = req.params.purchaseId
    const purchaseValue = await Purchase.findByPk(purchaseId)
    console.log (purchaseValue, '--------------this is purchase value')
    if (!purchaseValue) {
        return res.status(404).json({
            'message': "purchase couldn't be found",
            "statusCode": 404
        })
    }
    // console.log (purchaseValue.dataValues, '-----------this is the purchase value')

    await purchaseValue.destroy()
    res.status(200).json({
        "message":"Successfully deleted",
        'statusCode':200
    })
})




module.exports = router