import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { AppointmentStatus } from "../interfaces/IAppointment";
import { Users } from "./User";

@Entity({ name: "appointments" }) // se le da el nombre a la tabla
export class Appoiments {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @Column({ length: 50 })
  time: string;

  @Column({ default: "active" })
  status: string;

  // relacion de muchos a 1 con user
  @ManyToOne(() => Users, (user) => user.appointments)
  user: Users;
}
