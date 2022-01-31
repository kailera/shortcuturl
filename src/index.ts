import express from "express";
import { UrlController } from "./controller/urlController";
import { MongoConnection } from "./database/mongoConnection";

const app = express();
const urlController = new UrlController();
const database = new MongoConnection();

database.connect();
app.use(express.json());

app.post("/shorten", urlController.shorten);
app.get("/:hash", urlController.redirect);

app.listen(5000, () => {
  console.log("[server] listening on port 3000");
});
