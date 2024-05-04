import { Request, Response } from "express";
import {
  createUserService,
  findUserByCredentialId,
  getAllUsersService,
  getUserByIdService,
} from "../services/usersService";

import { validateCredential } from "../services/credentialsService";
import { Users } from "../entities/User";

// GET  / USERS - RETORNA LA LISTA DE TODOS LOS USUARIOS
export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users: Users[] = await getAllUsersService();
    res.status(200).json(users);
  } catch (error: any) {
    res.status(404).json({ error: error.message });
  }
};

// retorna los datos de un user identificado por id
export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await getUserByIdService(Number(id));

    res.status(200).json(user);
  } catch (error: any) {
    res.status(404).json({ error: error.message });
  }
};

export const register = async (req: Request, res: Response) => {
  const { name, email, birthdate, nDni, username, password, id } =
    await req.body;
  try {
    const newUser = await createUserService({
      name,
      email,
      birthdate,
      nDni,
      username,
      password,
      id,
    });
    res.status(201).json(newUser);
  } catch (error: any) {
    res.status(400).json("Error al crear usuarios, datos faltantes");
  }
};

// !revisar
export const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = await req.body;
    const credential = await validateCredential({
      username,
      password,
    });
    const user = await findUserByCredentialId(credential.id);

    res.status(200).json({ login: true, user });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
