import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.js";
import config from "../config.js";

const router = express.Router();

router.post("/login", async (req, res) => {
const { username, password } = req.body;

const user = await User.findOne({ where: { username } });
if (!user) return res.status(400).json({ error: "User not found" });

const valid = bcrypt.compareSync(password, user.password);
if (!valid) return res.status(400).json({ error: "Invalid password" });

const token = jwt.sign({ id: user.id }, config.jwtSecret);
res.json({ token });
});

export default router;
