import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();
const app: Express = express();
app.use(express.json());

app.get("/", (req: Request, res: Response): Response => {
	return res.send("Hello World");
});

app.post("/api/actions", (req: Request, res: Response) => {
	const { action }: { action: string } = req.body;
	if (action) {
		return res.status(200).json({ action });
	}
	return res.status(400).send("Something went wrong");
});

const port: string | undefined = process.env.PORT;

app.listen(port as string, (): void => {
	console.log(`Listening on port ${port}`);
});
