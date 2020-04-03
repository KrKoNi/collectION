const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const path = require('path')

const app = express()
app.use(express.json({ extended: true }))

app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/collection', require('./routes/collection.routes'))
app.use('/api/item', require('./routes/item.routes'))

if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.join(__dirname, 'client', 'build')))
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const PORT = process.env.PORT || 5000
const mongoUri = config.get('mongoUri')
async function start() {
    try {
        await mongoose.connect(mongoUri, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('MongoDB connected')
        app.listen(PORT, () => console.log(`App has been started on port ${PORT}`))
    } catch (e) {
        console.log('Server Error', e.message)
        process.exit(1)
    }
}

start()
