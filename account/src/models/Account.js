import mongoose from "mongoose";
import bcryptsjs from 'bcryptjs';

const accountSchema = mongoose.Schema(
    {
        id: {type: String},
        name: {type: String, required: true},
        email: {type: String, required: true},
        password: {type: String, required: true, select: false}
    }
);

// pre() -> antes de salvar o Schema faça algo
// a função pre() não aceita arrow function
accountSchema.pre("save", async function(next) {
    this.password = await bcryptsjs.hash(this.password, 10);
    next();
} )

const accounts = mongoose.model('users', accountSchema);

export default accounts;
   
    