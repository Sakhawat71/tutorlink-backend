import { Server } from "http";
import app from "./app";
import config from './app/config';
import mongoose from 'mongoose';

let server: Server;

async function main() {
    try {
        await mongoose.connect(config.db_url as string);
        // console.log("Database connected successfully");

        server = app.listen(config.port, () => {
            console.log(`TutorLink server running on port ${config.port}`);
        });
    } catch (error) {
        console.error("Error occurred during startup:", error);
        // process.exit(1);
    }
}

main();

// Handle unhandled promise rejections
// process.on('unhandledRejection', (reason, promise) => {
//     console.error('Unhandled Rejection:', reason);

//     if (server) {
//         server.close(() => {
//             process.exit(1);
//         });
//     } else {
//         process.exit(1);
//     }
// });

// Handle uncaught exceptions
// process.on('uncaughtException', (error) => {
//     console.log('Uncaught Exception:', error);
//     process.exit(1);
// });
