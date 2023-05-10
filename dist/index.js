"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const typeorm_1 = require("typeorm");
const Category_1 = require("./src/entity/Category");
const category = require("./src/routes/category");
dotenv_1.default.config();
const app = (0, express_1.default)();
// parsing json
app.use(express_1.default.json());
// routes
app.use("/api/category", category);
const port = process.env.PORT;
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: String(process.env.DB_PASSWORD),
    database: process.env.DB_DBNAME,
    synchronize: true,
    entities: [Category_1.Category],
});
exports.AppDataSource.initialize()
    .then(() => {
    console.log("Data Source has been initialized!");
})
    .catch((err) => {
    console.error("Error has occurred during Data Source initialization", err);
});
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
