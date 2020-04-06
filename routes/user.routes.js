const {Router} = require('express')
const router = Router()
const User = require('../models/User')
const auth = require('../middleware/auth.middleware')
const admin = require ('../middleware/admin.middleware')

router.get('/profile', auth, async (req, res) => {
    try {
        const users = await User.findById(req.user.userId)
        res.json(users)
    } catch (e) {
        res.status(500).json({message: 'Something wrong'})
    }
})

router.post('/make_admin/:id', admin, async (req, res) => {
    try {
        const user = await User.findOne({_id: req.params.id})
        user.isAdmin = true
        await user.save()
        res.json(user)
    } catch (e) {
        
    }
})

router.get('/', admin, async (req, res) => {
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

router.delete('/:id', admin, async (req, res) => {
    try {
        await User.deleteOne({_id: req.params.id})
     
    } catch (e) {
        res.status(500).json({message: 'Something wrong'})
    }
})




module.exports = router