"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const typeorm_config_1 = require("./typeorm.config");
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
// need to explicitly specify the path to .env.local
dotenv_1.default.config({ path: path_1.default.resolve(__dirname, "../.env.local") });
const app = (0, express_1.default)();
app.use(express_1.default.json());
// app.get("/", (req: Request, res: Response): Response => {
// 	return res.send("Hello World");
// });
// app.post("/api/actions", (req: Request, res: Response): Response => {
// 	const { action }: { action: string } = req.body;
// 	if (action) {
// 		return res.status(200).json({ action });
// 	}
// 	return res.status(400).send("Something went wrong");
// });
const port = process.env.PORT;
(0, typeorm_config_1.dataSource)();
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
