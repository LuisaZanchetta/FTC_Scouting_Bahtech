import express from "express";
import cors from "cors";
import { Sequelize } from "sequelize";
import dbConfig from "./config.js";
import models from "./models/index.js";
import authRoutes from "./routes/auth.js";
import teamRoutes from "./routes/teams.js";
import matchRoutes from "./routes/matches.js";
import scoutRoutes from "./routes/scouts.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/teams", teamRoutes);
app.use("/matches", matchRoutes);
app.use("/scouts", scoutRoutes);

const sequelize = new Sequelize(dbConfig.database);
models(sequelize);

sequelize.sync().then(() => {
console.log("DB Loaded");
app.listen(4000, () => console.log("Backend running on port 4000"));
});
