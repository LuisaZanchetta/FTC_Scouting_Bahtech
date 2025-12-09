import express from "express";
import Match from "../models/match.js";

const router = express.Router();

router.get("/", async (req, res) => {
res.json(await Match.findAll());
});

router.post("/", async (req, res) => {
const m = await Match.create(req.body);
res.json(m);
});

export default router;
