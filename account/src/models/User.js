const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

UserSchema.pre('save', async function(next) {
    const hash = await bcrypt.hash(this.password, parseInt(process.env.SALT));
    this.password = hash;
    next();
})

const User = mongoose.model('User', UserSchema);

module.exports = User;