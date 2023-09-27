const express = require('express');
const router = express.Router();
const apiRouter = require('./api')

router.use('/api', apiRouter)

router.get('/api/csrf/restore', function(req, res) {
    const csrfToken = req.csrfToken()
    res.cookie('XSRF-TOKEN', req.csrfToken())
    res.status(200).json({
        'XSRF-Token':csrfToken
    })
    res.send('Hello World!')
})

module.exports = router;