import dotenv from "dotenv";
dotenv.config();

export default {
jwtSecret: process.env.JWT_SECRET || "supersecretkey",
database: {
dialect: "sqlite",
storage: "./db.sqlite"
}
}
