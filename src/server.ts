require("dotenv").config();
import path from "path";
import http from "http";
import express from "express";
import sass from "node-sass";
import cors from "cors";
import routes from "./routes";

const app = express();
const server = http.createServer(app);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(routes());

export default server;
