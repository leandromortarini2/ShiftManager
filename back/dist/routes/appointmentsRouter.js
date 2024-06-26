"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const appointmentsControllers_1 = require("../controllers/appointmentsControllers");
const appointmentsRouter = (0, express_1.Router)();
appointmentsRouter.get("/", appointmentsControllers_1.getAllAppointments);
appointmentsRouter.get("/:appId", appointmentsControllers_1.getAppointmentById);
appointmentsRouter.post("/schedule", appointmentsControllers_1.schedule);
appointmentsRouter.put("/cancel/:appId", appointmentsControllers_1.cancel);
exports.default = appointmentsRouter;
