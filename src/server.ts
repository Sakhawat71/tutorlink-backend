import app from "./app"
import config from './app/config';
import mongoose from 'mongoose';




// main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.listen(config.port, () => {
    console.log(`Example app listening on port ${config.port}`)
})