const router = require("express").Router();
const verify = require('./verifyToken')

//Verify the token with a middleware
router.get('/', verify, (req, res) => {
    res.json({ posts: { title: 'my first post', description: 'I dont know' } })
})







module.exports = router;
