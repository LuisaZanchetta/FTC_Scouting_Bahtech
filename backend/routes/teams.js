import express from "express";
import Team from "../models/team.js";

const router = express.Router();

router.get("/", async (req, res) => {
res.json(await Team.findAll());
});

router.post("/", async (req, res) => {
const t = await Team.create(req.body);
res.json(t);
});

export default router;
