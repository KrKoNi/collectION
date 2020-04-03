const {Router} = require('express')
const router = Router()
const Collection = require('../models/Collection')
const auth = require('../middleware/auth.middleware')

router.post('/create', auth, async (req, res) => {
    try {
        const {type, name} = req.body
        
        const collection = new Collection({
            type, name, owner: req.user.userId
        })

        await collection.save()

        res.status(201).json({collection})
    } catch (e) {
        res.status(500).json({message: 'Something wrong'})
    }
})

router.get('/', auth, async (req, res) => {
    try {
        const collections = await Collection.find({ owner: req.user.userId })
        res.json(collections)
    } catch (e) {
        res.status(500).json({message: 'Something wrong'})
    }
})

router.get('/all', async (req, res) => {
    try {
        const collections = await Collection.find().sort({_createdAt: -1})
        res.json(collections)
    } catch (e) {
        res.status(500).json({message: 'Something wrong'})
    }
})

router.get('/:id', auth, async (req, res) => {
    try {
        const collections = await Collection.findById(req.params.id)
        res.json(collections)
    } catch (e) {
        res.status(500).json({message: 'Something wrong'})
    }
})
router.delete('/:id', auth, async (req, res) => {
    try {
        const collections = await Collection.delete(req.params.id)
        res.json(collections)
    } catch (e) {
        res.status(500).json({message: 'Something wrong'})
    }
})
module.exports = router