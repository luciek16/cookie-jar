"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/", (req, res) => {
    return res.send("Hello World");
});
app.post("/api/actions", (req, res) => {
    const { action } = req.body;
    if (action) {
        return res.status(200).json({ action });
    }
    return res.status(400).send("Something went wrong");
});
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
