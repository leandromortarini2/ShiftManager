import { CredentailsModel } from "../config/data-source";
import { Credentails } from "../entities/Credentials";
import ICredentailDto from "../dtos/ICredentialDto";
import IValidateCredentialDto from "../dtos/IValidateCredentialDto";

// Función para crear un nuevo par de credenciales
export const createCredential = async (
  createCredentialDto: ICredentailDto
): Promise<Credentails> => {
  const newCredential = await CredentailsModel.create(createCredentialDto);
  const result = await CredentailsModel.save(newCredential);
  return newCredential;
};

// función de berificacion!
export const validateCredential = async (
  validateCredentialDto: IValidateCredentialDto
) => {
  const { username, password } = validateCredentialDto;
  const foundCredential: Credentails | null = await CredentailsModel.findOneBy({
    username,
  });
  if (!foundCredential) throw Error("Usuario no encontrado");
  if (password !== foundCredential.password) throw Error("Password Incorrecto");
  return foundCredential;
};
