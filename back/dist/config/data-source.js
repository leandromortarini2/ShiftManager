"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppoimentModel = exports.CredentailsModel = exports.UserModel = exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("../entities/User");
const Appointment_1 = require("../entities/Appointment");
const Credentials_1 = require("../entities/Credentials");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "13g99190",
    database: "turnosdb",
    synchronize: true,
    logging: ["error"],
    entities: [User_1.Users, Appointment_1.Appoiments, Credentials_1.Credentails],
    subscribers: [],
    migrations: [],
});
exports.UserModel = exports.AppDataSource.getRepository(User_1.Users);
exports.CredentailsModel = exports.AppDataSource.getRepository(Credentials_1.Credentails);
exports.AppoimentModel = exports.AppDataSource.getRepository(Appointment_1.Appoiments);
