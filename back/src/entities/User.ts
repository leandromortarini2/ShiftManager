import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Appoiments } from "./Appointment";
import { Credentails } from "./Credentials";

@Entity({ name: "users" }) // se le da el nombre a la tabla
export class Users {
  @PrimaryGeneratedColumn() //PrimaryGeneratedColumn clave primaria A.I  || @PrimaryColumn primaria
  id: number;

  @Column({ length: 100 })
  name: string; // VARCHAR(255)

  @Column()
  email: string;

  @Column({ nullable: true })
  birthdate: Date;

  @Column("integer")
  nDni: number;

  // @Column()
  // credentialsId: number;

  // relacion one to one 1:1

  // especificamos la relacion 1 a 1
  @OneToOne(() => Credentails)

  // nos trae los datos de esa credencial
  @JoinColumn()
  credential: Credentails;

  // relacion 1 a muchos appointment

  @OneToMany(() => Appoiments, (appointment) => appointment.user)
  appointments: Appoiments[];
}
