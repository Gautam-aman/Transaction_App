// backend/db.js
const mongoose = require('mongoose');

//mongoose.connect("mongodb+srv://rigel2128:Rigel2128@paymentap.vtfpfkv.mongodb.net/")
mongoose.connect("mongodb://rigel2128:Rigel2128@ac-xyxn97a-shard-00-00.vtfpfkv.mongodb.net:27017,ac-xyxn97a-shard-00-01.vtfpfkv.mongodb.net:27017,ac-xyxn97a-shard-00-02.vtfpfkv.mongodb.net:27017/?replicaSet=atlas-uzssz0-shard-0&ssl=true&authSource=admin")
// Create a Schema for Users
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
});

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Reference to User model
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});

const Account = mongoose.model('Account', accountSchema);
const User = mongoose.model('User', userSchema);

module.exports = {
	User,
    Account
};