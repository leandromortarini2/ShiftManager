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
exports.cancelAppointment = exports.scheduleAppointment = exports.detailAppointment = exports.getAllAppointment = void 0;
const data_source_1 = require("../config/data-source");
let appointments = [];
const getAllAppointment = () => __awaiter(void 0, void 0, void 0, function* () {
    const allAppointments = yield data_source_1.AppoimentModel.find();
    return allAppointments;
});
exports.getAllAppointment = getAllAppointment;
const detailAppointment = (appId) => __awaiter(void 0, void 0, void 0, function* () {
    const appointment = yield data_source_1.AppoimentModel.findOneBy({
        id: appId,
    });
    if (!appointment)
        throw Error("El turno no fue encontrado.");
    return appointment;
});
exports.detailAppointment = detailAppointment;
const scheduleAppointment = (scheduleAppointment) => __awaiter(void 0, void 0, void 0, function* () {
    const newAppointment = data_source_1.AppoimentModel.create(scheduleAppointment);
    yield data_source_1.AppoimentModel.save(newAppointment);
    const user = yield data_source_1.UserModel.findOneBy({
        id: scheduleAppointment.userId,
    });
    if (!user)
        throw Error("Usuario inexistente");
    newAppointment.user = user;
    if (!newAppointment)
        throw Error("Los datos son incorrectos.");
    yield data_source_1.AppoimentModel.save(newAppointment);
    return newAppointment;
});
exports.scheduleAppointment = scheduleAppointment;
const cancelAppointment = (appId) => __awaiter(void 0, void 0, void 0, function* () {
    const cancel = yield data_source_1.AppoimentModel.findOneBy({
        id: appId,
    });
    if (!cancel)
        throw Error(" Turno inexistente");
    cancel.status = "cancelled";
    yield data_source_1.AppoimentModel.save(cancel);
});
exports.cancelAppointment = cancelAppointment;
