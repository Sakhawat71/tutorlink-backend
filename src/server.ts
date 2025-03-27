import { Server } from "http";
import app from "./app"
import config from './app/config';
import mongoose from 'mongoose';

let server : Server;

async function main() {
    try {
        await mongoose.connect(config.db_url as string);
        server = app.listen(config.port, () => {
            console.log(`TutorLink app listening on port ${config.port}`)
        });
    } catch (error) {
        console.error("Error occurred during startup:", error);
        process.exit(1);
    }
}
main();

process.on('unhandledRejection', (reason, promise) => {
    console.error('😒 Unhandled Rejection:', reason, promise);
    // console.log(' Unhandled Rejection:');
    if (server) {
        server.close(() => {
            process.exit(1);
        })
    }
    process.exit(1);
});

process.on('uncaughtException', () => {
    console.log('😢 uncaught Exception');
    process.exit(1);
});