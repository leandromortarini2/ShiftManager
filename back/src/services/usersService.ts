// En el servicio de usuarios:

// Implementar una función que pueda retornar el arreglo completo de usuarios.

// Implementar una función que pueda retornar un elemento del arreglo que haya sido identificado por id.

import { UserModel } from "../config/data-source";
import IUserDto from "../dtos/IUserDto";
import { Credentails } from "../entities/Credentials";
import { Users } from "../entities/User";
import { createCredential } from "./credentialsService";

// ? T E R M I N A D O R
export const getAllUsersService = async (): Promise<Users[]> => {
  const allUsers: Users[] = await UserModel.find({
    relations: { appointments: true },
  });
  return allUsers;
};

// ? T E R M I N A D O R
//  R E T O R N A - U N - U S U A R I O P O R -  S U - "ID"
export const getUserByIdService = async (id: number): Promise<Users | null> => {
  const foundUser: Users | null = await UserModel.findOne({
    where: { id },
    relations: ["appointments"],
  });
  if (!foundUser) throw Error("El usuario no fue encontrado.");
  return foundUser;
};

// ? T E R M I N A D O R
//C R E A - N U E V O - U S U A R I O
export const createUserService = async (createUserDto: IUserDto) => {
  const newUser: Users = UserModel.create(createUserDto);
  const newCredential: Credentails = await createCredential({
    username: createUserDto.username,
    password: createUserDto.password,
  });

  await UserModel.save(newUser);
  newUser.credential = newCredential;
  await UserModel.save(newUser);
  if (!newUser) throw Error("Error al crear usuarios, datos faltantes");
  return newUser;
};

export const findUserByCredentialId = async (
  credentialId: number
): Promise<Users | null> => {
  const foundUser: Users | null = await UserModel.findOneBy({
    credential: { id: credentialId },
  });
  return foundUser;
};
