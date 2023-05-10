import express, { Express, Request, Response } from "express";
import { dataSource } from "./src/data-source";
import dotenv from "dotenv";
import path from "path";

// need to explicitly specify the path to .env.local
dotenv.config({ path: path.resolve(__dirname, "../.env.local") });

const app: Express = express();
app.use(express.json());

const port: string | undefined = process.env.PORT;

dataSource();

app.listen(port as string, (): void => {
	console.log(`Listening on port ${port}`);
});
