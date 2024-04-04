const express = require('express')
const {restoreUser, requireAuth} = require('../../utils/auth')
const {sequelize, Purchase, Category, Profile} = require('../../db/models')
const router = express.Router()
const {Sequelize} = require('sequelize')
// const { route } = require('./session')






// get all the purchase belonging to the user
router.get('/current', requireAuth, async(req, res) => {
    // let userId = req.user.dataValues.id
    const userProfile = await Profile.findOne({
        where:{id:1}
    })
    res.status(200).json(userProfile)
})


// edit the user profile information 
router.put('/edit', requireAuth, async(req, res) => {
    let userId = req.userId.dataValues.id
    // find the profile 
    let {salary} = req.body
    const userProfile = await Profile.findOne({
        where:{id:1}
    })
    userProfile.salary = salary
    await userProfile.save()
    console.log (userProfile, '--------------this is the updated profile')
    res.status(200).json(userProfile)

})



module.exports=router