const router = require('express').Router()
const sessionRouter = require('./session.js')
const usersRouter = require('./users.js')
const {restoreUser} = require('../../utils/auth.js')
const purchaseRouter = require('./purchase.js')

// Connect restoreUser middleware to the API router
  // if courrent user session is valid, set req.user to the user in the database. 
  // if current user session is not valid, set req.user to null 

router.use(restoreUser)

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/purchase', purchaseRouter)





router.post('/test', function(req, res) {
    res.json({ requestBody: req.body });
  });


  // GET /api/set-token-cookie
const { setTokenCookie } = require('../../utils/auth.js');
const { User } = require('../../db/models');
router.get('/set-token-cookie', async (_req, res) => {
  const user = await User.findOne({
    where: {
      username: 'Demo-lition'
    }
  });
  setTokenCookie(res, user);
  return res.json({ user: user });
});
module.exports = router