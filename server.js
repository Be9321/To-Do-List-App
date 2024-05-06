import express from "express";
import configurations from "./src/configs/index.js";
import App from './src/services/ExpressApp.js';
import connectToMongoDB from './src/services/Database.js';

const StartExpressServer = async () => {
    const app = express();

    connectToMongoDB();
    await App(app);
    
    app.listen(configurations.PORT, () => console.log(`Server is running on port ${configurations.PORT}`))
};

StartExpressServer();