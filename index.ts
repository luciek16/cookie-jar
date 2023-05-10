import express, { Express } from "express";
import dotenv from "dotenv";
import { DataSource } from "typeorm";
import { Category } from "./src/entity/Category";

const category = require("./src/routes/category");

dotenv.config();

const app: Express = express();
// parsing json
app.use(express.json());

// routes
app.use("/api/category", category);

const port: string | undefined = process.env.PORT;

export const AppDataSource: DataSource = new DataSource({
	type: "postgres",
	host: process.env.DB_HOST,
	port: Number(process.env.DB_PORT),
	username: process.env.DB_USERNAME,
	password: String(process.env.DB_PASSWORD),
	database: process.env.DB_DBNAME,
	synchronize: true,
	entities: [Category],
});

AppDataSource.initialize()
	.then(() => {
		console.log("Data Source has been initialized!");
	})
	.catch((err) => {
		console.error("Error has occurred during Data Source initialization", err);
	});

app.listen(port as string, (): void => {
	console.log(`Listening on port ${port}`);
});
