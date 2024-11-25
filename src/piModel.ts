import mongoose from "mongoose";

const piSchema = new mongoose.Schema({
    phrase: {
        type: [],
        requires: true
    }
})

export const Pi = mongoose.model("Pi", piSchema);
