import { Request, Response } from "express";
import {
  cancelAppointment,
  detailAppointment,
  getAllAppointment,
  scheduleAppointment,
} from "../services/appointmentService";
import { Appoiments } from "../entities/Appointment";

export const getAllAppointments = async (req: Request, res: Response) => {
  try {
    const allAppointments: Appoiments[] = await getAllAppointment();
    res.status(200).json(allAppointments);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getAppointmentById = async (req: Request, res: Response) => {
  const { appId } = req.params;
  try {
    const appointment = await detailAppointment(Number(appId));
    res.status(200).json(appointment);
  } catch (error: any) {
    res.status(404).json({ error: error.message });
  }
};

export const schedule = async (req: Request, res: Response) => {
  const { date, time, userId, id } = await req.body;
  try {
    const newAppointment: Appoiments = await scheduleAppointment({
      id,
      date,
      time,
      userId,
    });
    res.status(201).json(newAppointment);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const cancel = async (req: Request, res: Response) => {
  const { appId } = await req.params;
  try {
    await cancelAppointment(Number(appId));
    res.status(200).json({ message: "Turno Cancelado" });
  } catch (error: any) {
    res.status(404).json({ error: error.message });
  }
};
