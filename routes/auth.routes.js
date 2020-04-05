const {Router} = require('express')
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')
const {check, validationResult} = require('express-validator')
const User = require('../models/User')
const router = Router()


// /api/auth/register
router.post(
  '/register', async (req, res) => {
  try {
    const {email, username, password} = req.body
    const candidate = await User.findOne({ email }) || await User.findOne({ username })
    if (candidate) {
      return res.status(400).json({ message: 'Existed user' })
    }

    const hashedPassword = await bcrypt.hash(password, 12)
    const user = new User({ email, username, password: hashedPassword })

    await user.save()

    res.status(201).json({ message: 'User created' })

  } catch (e) {
    res.status(500).json({ message: 'Something wrong' })
  }
})

// /api/auth/login
router.post(
  '/login',
  async (req, res) => {
  try {
    const {username, password} = req.body
    const user = await User.findOne({ email: username }) || await User.findOne({username})
    if (!user) {
      return res.status(400).json({ message: 'User not found' })
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return res.status(400).json({ message: 'Wrong password' })
    }

    const token = jwt.sign(
      { userId: user.id, adminStatus: user.isAdmin },
      config.get('jwtSecret'),
      { expiresIn: '1h' }
    )

    res.json({ token, userId: user.id, adminStatus: user.isAdmin })

  } catch (e) {
    res.status(500).json({ message: 'Something wrong' })
  }
})


module.exports = router