const express = require('express')
const {restoreUser, requireAuth} = require('../../utils/auth')
const {sequelize, Purchase, Category} = require('../../db/models')
const router = express.Router()
const {Sequelize} = require('sequelize')


router.get('/current', restoreUser, async(req, res) => {
    let userId = req.user.dataValues.id
    const userPurchases = await Purchase.findAll({
        where:{userId: userId}
    })
    console.log (userId, '---------------this is the user')
    res.status(200).json(userPurchases)
})

module.exports = router