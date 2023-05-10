import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("category")
export class Category {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column("varchar", { length: 50 })
	catName: string;

	@Column({
		default: "admin",
	})
	author: string;

	constructor(id: string, catName: string, author: string) {
		this.id = id;
		this.catName = catName;
		this.author = author;
	}
}
