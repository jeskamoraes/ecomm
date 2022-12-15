import mongoose from "mongoose";

mongoose.connect('mongodb://jessica:123456789@localhost:27017/ecomm?authSource=admin');
let db = mongoose.connection;

export default db;

    
