"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const urlController_1 = require("./controller/urlController");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const urlController = new urlController_1.UrlController();
app.post("/shorten", urlController.shorten);
app.get("/:hash", urlController.redirect);
app.listen(5000, () => {
    console.log("[server] listening on port 3000");
});
