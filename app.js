const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const cors = require('cors')
const { json } = require( "body-parser")
const expressWs = require('express-ws')
require('dotenv').config()

const app = express()

const corsOptions = {
    exposedHeaders: 'auth-header',
}
app.use(cors(corsOptions))
const wsInstance = expressWs(app)

app.use(express.json({extended: true}))
app.use(json());
app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/collection', require('./routes/collection.routes'))
app.use('/api/item', require('./routes/item.routes'))
app.use('/api/comments', require('./routes/comment.routes'))
app.use('/api/cache', require('./routes/cache.routes'));
app.ws('/comment', (ws, req) => {

    ws.on('message', function incoming(message) {
      console.log(message) ;
      ws.broadcast(message);
    });

    ws.broadcast = function broadcast(data) {
      wsInstance.getWss().clients.forEach(function each(client) {
      client.send(data);
      });
    };
})

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