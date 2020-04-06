const {Router} = require('express')
const router = Router()
const Item = require('../models/Item')
const auth = require('../middleware/auth.middleware')

router.post('/create', auth, async (req, res) => {
    try {
        const {name, col, description} = req.body
        
        const item = new Item({
            name, col, description
        })
        
        await item.save()

        res.status(201).json({item})
    } catch (e) {
        res.status(500).json({message: 'Something wrong'})
    }
})



router.get('/:id', auth, async (req, res) => {
    try {
        const items = await Item.find({ col: req.params.id })
        res.json(items)
    } catch (e) {
        res.status(500).json({message: 'Something wrong'})
    }
})
module.exports = router