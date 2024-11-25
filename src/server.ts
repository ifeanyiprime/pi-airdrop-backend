import express from "express";
import dotenv from "dotenv"
import cors from "cors"
import mongoose from "mongoose";
import router from "./RouterFile";
const app = express();

app.use(cors());
app.use(express.json());
dotenv.config();
app.use('/', router)

const PORT = process.env.PORT || 3000;
const { MONGO_URI } = process.env;


const startServer = async () => {
    try {
        await mongoose.connect(MONGO_URI as string);
        console.log("Connected to MongoDB!");

        app.listen(PORT, async () => {
            console.log(`Server listening on port ${PORT}`);
        });
    } catch (e: any) {

        console.error("Error connecting to database:", e.message);
        process.exit(1); // Exit the process with failure

    }
}
startServer()