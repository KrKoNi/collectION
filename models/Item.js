const {Schema, model, Types} = require('mongoose')


const schema = new Schema({
    name: {type: String, required: true},
    description: {type: String},
    col: {type: Types.ObjectId, ref: 'Col'},
    createdAt: {type: Date, default: Date.now()}
})



module.exports = model('Item', schema);