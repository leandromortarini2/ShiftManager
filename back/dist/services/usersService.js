"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUserByCredentialId = exports.createUserService = exports.getUserByIdService = exports.getAllUsersService = void 0;
const data_source_1 = require("../config/data-source");
const credentialsService_1 = require("./credentialsService");
const getAllUsersService = () => __awaiter(void 0, void 0, void 0, function* () {
    const allUsers = yield data_source_1.UserModel.find({
        relations: { appointments: true },
    });
    return allUsers;
});
exports.getAllUsersService = getAllUsersService;
const getUserByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const foundUser = yield data_source_1.UserModel.findOne({
        where: { id },
        relations: ["appointments"],
    });
    if (!foundUser)
        throw Error("El usuario no fue encontrado.");
    return foundUser;
});
exports.getUserByIdService = getUserByIdService;
const createUserService = (createUserDto) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = data_source_1.UserModel.create(createUserDto);
    const newCredential = yield (0, credentialsService_1.createCredential)({
        username: createUserDto.username,
        password: createUserDto.password,
    });
    yield data_source_1.UserModel.save(newUser);
    newUser.credential = newCredential;
    yield data_source_1.UserModel.save(newUser);
    if (!newUser)
        throw Error("Error al crear usuarios, datos faltantes");
    return newUser;
});
exports.createUserService = createUserService;
const findUserByCredentialId = (credentialId) => __awaiter(void 0, void 0, void 0, function* () {
    const foundUser = yield data_source_1.UserModel.findOneBy({
        credential: { id: credentialId },
    });
    return foundUser;
});
exports.findUserByCredentialId = findUserByCredentialId;
