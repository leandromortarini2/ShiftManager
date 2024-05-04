export enum AppointmentStatus {
  ACTIVE = "active",
  CANCELED = "canceled",
}

interface IAppointment {
  id: number;
  date: string;
  time: string;
  userId: number;
  status: AppointmentStatus;
}

export default IAppointment;
