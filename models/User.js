const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    email: {type: String, required: true, unique: true},
    username: {type: String, unique: true},
    password: {type: String, required: true},
    col: [{type: Types.ObjectId, ref: 'Col'}],
    isAdmin: {type: Boolean, default: false}
})



module.exports = model('User', schema);