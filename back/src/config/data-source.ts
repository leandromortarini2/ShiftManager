import { DataSource } from "typeorm";
import { Users } from "../entities/User";
import { Appoiments } from "../entities/Appointment";
import { Credentails } from "../entities/Credentials";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "13g99190",
  database: "turnosdb",
  // dropSchema: true,
  synchronize: true,
  logging: ["error"],
  entities: [Users, Appoiments, Credentails],
  subscribers: [],
  migrations: [],
});

export const UserModel = AppDataSource.getRepository(Users);

export const CredentailsModel = AppDataSource.getRepository(Credentails);

export const AppoimentModel = AppDataSource.getRepository(Appoiments);

// PARA PREGUNTAS

//   entities: [Users, Appoiments, Credentails],
