const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = (req, res, next) => {
  if (req.method === 'OPTIONS') {
    return next()
  }

  try {
    const token = req.headers.authorization.split(' ')[1] // "Bearer TOKEN"
    if (!token) {
      return res.status(401).json({ message: 'You are not authorized' })
    }
    const decoded = jwt.verify(token, config.get('jwtSecret'))
    req.user = decoded
    if (!req.user.adminStatus) return res.status(403).send("Access denied.");
    next();

  } catch (e) {
    res.status(401).json({ message: 'You are not authorized' })
  }
}
