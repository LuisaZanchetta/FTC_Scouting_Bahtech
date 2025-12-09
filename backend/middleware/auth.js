import jwt from "jsonwebtoken";
import config from "../config.js";

export default function (req, res, next) {
const token = req.headers.authorization;
if (!token) return res.status(401).json({ error: "No token" });

try {
const decoded = jwt.verify(token, config.jwtSecret);
req.userId = decoded.id;
next();
} catch {
return res.status(401).json({ error: "Invalid token" });
}
}
