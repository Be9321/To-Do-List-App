import mongoose from "mongoose";
import configurations from "../configs/index.js";

/**
* Connects to the MongoDB database using the configuration settings.
* @returns {Promise<void>} A promise that resolves when the connection is established, or rejects with an error.
*/
export default function () {
    mongoose.connect("mongodb+srv://belyseurwidukunda:Urwidukunda0255@cluster0.yxyusx2.mongodb.net/TODO-LIST-APP")
        .then(() => console.log("Connected to MongoDB"))
        .catch(err => console.log(err));
}