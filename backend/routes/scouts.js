import express from "express";
import ScoutEntry from "../models/scoutEntry.js";

const router = express.Router();

router.get("/", async (req, res) => {
res.json(await ScoutEntry.findAll());
});

router.post("/", async (req, res) => {
const s = await ScoutEntry.create(req.body);
res.json(s);
});

export default router;
