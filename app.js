const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const cors = require('cors')
const { json } = require( "body-parser")
require('dotenv').config()

const app = express()

const corsOptions = {
    exposedHeaders: 'auth-header',
}
app.use(cors(corsOptions))


app.use(express.json({extended: true}))
app.use(json());
app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/collection', require('./routes/collection.routes'))
app.use('/api/item', require('./routes/item.routes'))



const PORT = config.get('port') || 5000
const mongoUri = config.get('mongoUri')
async function start() {
    try {
        await mongoose.connect(mongoUri, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('MongoDB connected')
    } catch (e) {
        console.log('Server Error', e.message)
        process.exit(1)
    }
}

start()
app.listen(PORT, () => console.log(`App has been started on port ${PORT}`))