const express = require('express')
const {restoreUser, requireAuth} = require('../../utils/auth')
const {sequelize, Purchase, Category, Profile} = require('../../db/models')
const router = express.Router()
const {Sequelize} = require('sequelize')


// Get the user Profile information 

router.get('/',requireAuth, async(req, res) => {
    let userId = req.user.dataValues.id
})

module.export = router