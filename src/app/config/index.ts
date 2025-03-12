import dotenv from 'dotenv';
import path from 'path'

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
    port: process.env.PORT,
    db_url: process.env.DATABASE_URL,
    NODE_ENV: process.env.NODE_ENV,
    accessTokenSecret: process.env.ACCESS_TOKEN_SECRET,
    accessTokenExpiry: process.env.ACCESS_TOKEN_EXPIRY,
    saltRound: process.env.SALT_ROUND,
}