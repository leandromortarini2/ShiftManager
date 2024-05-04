// En el servicio de turnos:

import { AppoimentModel, UserModel } from "../config/data-source";
import IAppointmentDto from "../dtos/IAppointmentDto";
import { Appoiments } from "../entities/Appointment";
import { Users } from "../entities/User";
import IAppointment, { AppointmentStatus } from "../interfaces/IAppointment";

let appointments: IAppointment[] = [];

//  función que retorna el arreglo completo de turnos.
//? F U N C I O N A N D O
export const getAllAppointment = async (): Promise<Appoiments[]> => {
  const allAppointments: Appoiments[] = await AppoimentModel.find();
  return allAppointments;
};

//? F U N C I O N A N  D O
// función que obtiene el detalle de un turno por ID.
export const detailAppointment = async (appId: number): Promise<Appoiments> => {
  const appointment: Appoiments | null = await AppoimentModel.findOneBy({
    id: appId,
  });
  if (!appointment) throw Error("El turno no fue encontrado.");
  return appointment;
};

//? F U N C I O N A N  D O
//  función crea un nuevo turno,
export const scheduleAppointment = async (
  scheduleAppointment: IAppointmentDto
): Promise<Appoiments> => {
  const newAppointment: Appoiments | null =
    AppoimentModel.create(scheduleAppointment);
  await AppoimentModel.save(newAppointment);

  const user: Users | null = await UserModel.findOneBy({
    id: scheduleAppointment.userId,
  });
  if (!user) throw Error("Usuario inexistente");
  newAppointment.user = user;
  if (!newAppointment) throw Error("Los datos son incorrectos.");
  await AppoimentModel.save(newAppointment);
  return newAppointment;
};

//? F U N C I O N A N D O
//  función que reciba el id de un turno específico y cambiar su estado a “cancelled”.
export const cancelAppointment = async (appId: number): Promise<void> => {
  const cancel: Appoiments | null = await AppoimentModel.findOneBy({
    id: appId,
  });
  if (!cancel) throw Error(" Turno inexistente");
  cancel.status = "cancelled";
  await AppoimentModel.save(cancel);
};
