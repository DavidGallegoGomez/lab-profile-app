const express = require('express');
const router  = express.Router();
const auth    = require('../controllers/auth.controller');
const secure  = require('../middlewares/secure.mid')


router.post("/authenticate", auth.authenticate)

router.post('/register', auth.register);
router.get('/logout', secure.isAuthenticated, auth.logout)

router.get('/profile', secure.isAuthenticated, auth.getProfile)
router.put('/profile', secure.isAuthenticated, auth.editProfile)



module.exports = router;
