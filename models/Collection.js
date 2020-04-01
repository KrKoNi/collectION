const {Schema, model, Types} = require('mongoose')


const schema = new Schema({
    type: {type: String, required: true},
    name: {type: String, required: true},
    items: [{type: Types.ObjectId, ref: 'Item'}],
    owner: {type: Types.ObjectId, ref: 'User'}
})



module.exports = model('Col', schema);