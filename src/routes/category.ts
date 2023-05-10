import express, { Request, Response } from "express";
import { AppDataSource } from "../..";
import { Category } from "../entity/Category";

const userRouter = express.Router();

userRouter.post("/", async (req: Request, res: Response) => {
	const { catName } = req.body;
	try {
		await AppDataSource.createQueryBuilder()
			.insert()
			.into(Category)
			.values({ catName })
			.execute();

		return res.status(200).json({ catName });
	} catch (error) {
		console.log(error);
		return res.status(500).send("Internal server error");
	}
});

userRouter.get("/", async (req: Request, res: Response) => {
	try {
		const categories = await AppDataSource.getRepository(Category)
			.createQueryBuilder("category")
			.getMany();

		return res.status(200).json({ categories });
	} catch (error) {
		console.log(error);
		return res.status(500).send("Internal server error");
	}
});

userRouter.patch("/:id", async (req: Request, res: Response) => {
	const { changeCat } = req.body;
	const catID = req.params.id;
	try {
		await AppDataSource.createQueryBuilder()
			.update(Category)
			.set({ catName: changeCat })
			.where("id = :id", { id: catID })
			.execute();

		return res.status(200).json({ changeCat });
	} catch (error) {
		console.log(error);
		return res.status(500).send("Internal server error");
	}
});

userRouter.delete("/:id", async (req: Request, res: Response) => {
	const catID = req.params.id;
	try {
		await AppDataSource.createQueryBuilder()
			.delete()
			.from(Category)
			.where("id = :id", { id: catID })
			.execute();

		return res.status(200).send("Deleted");
	} catch (error) {
		console.log(error);
		return res.status(500).send("Internal server error");
	}
});

module.exports = userRouter;
