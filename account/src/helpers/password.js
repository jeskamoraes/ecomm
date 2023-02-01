import bcrypt from 'bcryptjs';

async function hashPassword(password) {
    const hashedPassword = await bcrypt.hash(password, process.env.SALT);
    return hashedPassword;
}

export default hashPassword;