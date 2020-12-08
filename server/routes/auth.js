const express = require('express');
const router = express.Router();

const passport = require('../auth/passport');

router.get(
    '/google',
    passport.authenticate('google',
        { scope: ['https://www.googleapis.com/auth/plus.login'] }
    )
);

router.get(
    '/google/callback',
    passport.authenticate('google',
        { failureRedirect: '/login' }
    )
);

module.exports = router;