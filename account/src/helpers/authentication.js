const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const createAccountUseCase = require('../use-case/createAccountUseCase');
const bcrypt = require('bcryptjs');

function findUser(email) {
    return global.db.collection('users').findOne({ 'email': email })
}


