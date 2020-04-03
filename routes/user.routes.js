const {Router} = require('express')
const router = Router()
const User = require('../models/User')
const auth = require('../middleware/auth.middleware')

router.get('/', auth, async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (e) {
        res.status(500).json({message: 'Something wrong'})
    }
})

router.get('/:id', auth, async (req, res) => {
    try {
        const users = await User.findById(req.params.id)
        res.json(users)
    } catch (e) {
        res.status(500).json({message: 'Something wrong'})
    }
})
module.exports = router