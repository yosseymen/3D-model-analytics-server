import { Request, Response } from "express";

const clicks: Array<{ modelId: string; referrer: string; timestamp: Date }> = [];

export const updateClicks = (req: Request, res: Response): void => {
    const { modelId, referrer } = req.body;

    if (!modelId || !referrer) {
        res.status(400).send("Model ID and referrer are required");
        return;
    }

    clicks.push({ modelId, referrer, timestamp: new Date() });

    console.log("Clicks data:", clicks);

    res.status(200).send("Click tracked successfully");
};
