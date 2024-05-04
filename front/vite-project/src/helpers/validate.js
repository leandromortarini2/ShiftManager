/* eslint-disable no-unused-vars */
const validate = (input) => {
  // console.log("input", input);
  const emailRegExp = /\S+@\S+\.\S+/; // Validador de email.
  const errors = {};
  const uppercaseRegex = /[A-Z]/;
  const numberRegex = /[0-9]/;
  const dniRegex = /^[0-9]+$/;

  // VALIDACION NAME
  if (!input.name) errors.name = "Debe ingresar un nombre";
  else {
    if (input.name.length < 4) errors.name = "Nombre de al menos 4 caracteres";
    if (input.name.length > 15) errors.name = "Nombre de máximo 15 caracteres";
    if (!input.name.trim()) errors.name = "Debe ingresar un nombre válido";
  }
  // VALIDACION FECHA DE NACIMIENTO
  if (!input.birthdate)
    errors.birthdate = "Debe ingresar su fecha de nacimiento";
  else {
    if (input.birthdate.length < 6)
      errors.birthdate = "Debe ingresar al menos 8 caracteres";
    if (input.birthdate.length > 10) errors.birthdate = "Máximo 10 caracteres";
  }
  // VALIDACION DNI
  if (!input.nDni) errors.nDni = "Debe ingresar un número de documento";
  else {
    if (input.nDni.length < 8) errors.nDni = "DNI de al menos 8 caracteres";
    if (input.nDni.length > 11) errors.nDni = "DNI de máximo 11 caracteres";
    if (!dniRegex.test(input.nDni))
      errors.nDni = "El DNI debe contener solo números";
  }

  // VALIDACION USUARIO
  if (!input.username) errors.username = "Debe ingresar un nombre";
  else {
    if (input.username.length < 4)
      errors.username = "Nombre de al menos 4 caracteres";
    if (input.username.length > 15)
      errors.username = "Nombre de máximo 15 caracteres";
    if (!input.username.trim())
      errors.username = "Debe ingresar un nombre válido";
  }

  // VALIDACION EMAIL
  if (!input.email) errors.email = "Debe ingresar un email";
  else {
    if (!emailRegExp.test(input.email))
      errors.email = "Debe ingresar un email válido";
  }

  // VALIDACION CONTRASEÑA
  if (!input.password) errors.password = "Debe ingresar una contraseña";
  else {
    if (input.password.length < 4)
      errors.password = "Contraseña de al menos 4 caracteres";
    if (input.password.length > 10)
      errors.password = "Contraseña de máximo 10 caracteres";
    if (!uppercaseRegex.test(input.password))
      errors.password = "La contraseña debe tener al menos una mayúscula";
    if (!numberRegex.test(input.password))
      errors.password = "La contraseña debe tener al menos un número";
  }

  // VALIDACIÓN FECHA PARA TURNO
  if (!input.date) {
    errors.date = "Debe ingresar una fecha para el turno";
  } else {
    const currentDate = new Date();
    const selectedDate = new Date(input.date);
    if (selectedDate < currentDate) {
      errors.date =
        "La fecha seleccionada no puede ser anterior a la fecha actual";
    }
  }

  // VALIDACIÓN HORA PARA TURNO
  if (!input.time) {
    errors.time = "Debe ingresar una hora para el turno HH:MM";
  } else {
    const timeRegex = /^(?:2[0-3]|[01][0-9]):[0-5][0-9]$/; // Formato HH:MM (24 horas)
    if (!timeRegex.test(input.time)) {
      errors.time = "Formato de hora inválido. Utilice HH:MM (24 horas)";
    }
  }

  return errors;
};

export default validate;
