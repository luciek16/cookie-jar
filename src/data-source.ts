import { DataSource } from "typeorm";

export const dataSource = () => {
	const AppDataSource: DataSource = new DataSource({
		type: "postgres",
		host: process.env.DB_HOST,
		port: Number(process.env.DB_PORT),
		username: process.env.DB_USERNAME,
		password: String(process.env.DB_PASSWORD),
		database: process.env.DB_DBNAME,
		synchronize: true,
		entities: ["entity/*.ts"],
	});

	AppDataSource.initialize()
		.then(() => {
			console.log("Data Source has been initialized!");
		})
		.catch((err) => {
			console.error("Error has occured during Data Source initialization", err);
		});
};
