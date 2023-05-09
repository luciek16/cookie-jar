import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
	// type: "postgres",
	// port: 5432,
	// host: "localhost",
	username: "postgres",
	password: "password",
	// database: "cookie-jar",
	type: "postgres",
	host: process.env.DB_HOST,
	port: Number(process.env.DB_PORT),
	// username: process.env.DB_USERNAME,
	// password: String(process.env.DB_PASSWORD),
	database: process.env.DB_DBNAME,
	synchronize: true,
	// logging: true,
	entities: [__dirname + "/entities/*.ts"],
});

AppDataSource.initialize()
	.then((data) => {
		console.log(data);
		console.log("Data Source has been initialized!");
	})
	.catch((err) => {
		console.error("Error has occured during Data Source initialization", err);
	});
