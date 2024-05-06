/* eslint-disable no-unused-vars */
import styles from "./Register.module.css";
import axios from "axios";
import { useState } from "react";
import validate from "../../helpers/validate";
import { useNavigate } from "react-router-dom";

const POSTREGISTER_URL =
  "https://5a85-186-127-224-4.ngrok-free.app/users/register";

const Register = () => {
  // E S T A D O S
  const Navigate = useNavigate();
  const [Errors, setErrors] = useState({});

  const [StateForm, setStateForm] = useState({
    name: "",
    email: "",
    birthdate: "",
    nDni: "",
    username: "",
    password: "",
  });

  // H A N D L E R S
  const handlerInputChange = (event) => {
    const { name, value } = event.target;

    setStateForm({
      ...StateForm,
      [name]: value,
    });
    setErrors(validate({ ...StateForm, [name]: value }));
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    axios
      .post(POSTREGISTER_URL, StateForm)
      .then(() => {
        alert(
          "Tu registro se ha completado con éxito. Bienvenido a nuestra comunidad. Disfruta de todas las funcionalidades que ofrecemos."
        );
        Navigate("/Login");
        setStateForm({
          name: "",
          email: "",
          birthdate: "",
          nDni: "",
          username: "",
          password: "",
        });
      })
      .catch(() => {
        alert(
          "Lo siento, no pudimos completar tu registro en este momento. Por favor, verifica que todos los campos estén completos correctamente y vuelve a intentarlo más tarde."
        );
      });
  };

  return (
    <>
      <div className={styles.sectionRegister}>
        <div className={styles.containerGeneralRegister}>
          {/* F R O M U LA  R I O */}
          <form className={styles.formRegister} onSubmit={handleOnSubmit}>
            <p className={styles.titleRegister}>Register </p>
            {/* -----INPUT------ */}
            <div className={styles.BoxInputs}>
              <div className={styles.BoxInput}>
                <label htmlFor="" className={styles.labelRegister}>
                  Nombre:
                </label>
                <input
                  className={styles.inputRegister}
                  type="text"
                  name="name"
                  value={StateForm.name}
                  placeholder="nombre"
                  onChange={handlerInputChange}
                />
                <p className={styles.parrafoFormRegister}>
                  {Errors.name ? Errors.name : null}
                </p>
              </div>
              {/* ------INPUT----- */}{" "}
              <div className={styles.BoxInput}>
                <label htmlFor="" className={styles.labelRegister}>
                  Email:
                </label>
                <input
                  className={styles.inputRegister}
                  type="text"
                  name="email"
                  value={StateForm.email}
                  placeholder="correo22@gmail.com"
                  onChange={handlerInputChange}
                />
                <p className={styles.parrafoFormRegister}>
                  {Errors.email ? Errors.email : null}
                </p>
              </div>
            </div>
            {/* -----INPUT------ */}{" "}
            <div className={styles.BoxInputs}>
              <div className={styles.BoxInput}>
                <label htmlFor="" className={styles.labelRegister}>
                  Fecha de nacimiento:
                </label>
                <input
                  className={styles.inputRegister}
                  type="date"
                  name="birthdate"
                  value={StateForm.birthdate}
                  placeholder="12-12-12"
                  onChange={handlerInputChange}
                />
                <p className={styles.parrafoFormRegister}>
                  {Errors.birthdate ? Errors.birthdate : null}
                </p>
              </div>
              {/* -----INPUT------ */}{" "}
              <div className={styles.BoxInput}>
                <label htmlFor="" className={styles.labelRegister}>
                  Dni:
                </label>
                <input
                  className={styles.inputRegister}
                  type="text"
                  name="nDni"
                  value={StateForm.nDni}
                  placeholder="numero de documento"
                  onChange={handlerInputChange}
                />
                <p className={styles.parrafoFormRegister}>
                  {Errors.nDni ? Errors.nDni : null}
                </p>
              </div>
            </div>
            {/* -----INPUT------ */}{" "}
            <div className={styles.BoxInputs}>
              <div className={styles.BoxInput}>
                <label htmlFor="" className={styles.labelRegister}>
                  Usuario:
                </label>
                <input
                  className={styles.inputRegister}
                  type="text"
                  name="username"
                  value={StateForm.username}
                  placeholder="usuario"
                  onChange={handlerInputChange}
                />
                <p className={styles.parrafoFormRegister}>
                  {Errors.username ? Errors.username : null}
                </p>
              </div>
              {/* -----INPUT------ */}{" "}
              <div className={styles.BoxInput}>
                <label htmlFor="password" className={styles.labelRegister}>
                  Contraseña:{" "}
                </label>
                <input
                  className={styles.inputRegister}
                  type="password"
                  name="password"
                  value={StateForm.password}
                  placeholder="*****"
                  onChange={handlerInputChange}
                />
                <p className={styles.parrafoFormRegister}>
                  {Errors.password ? Errors.password : null}
                </p>
              </div>
            </div>
            {/* ----------- */}
            <p className={styles.parrafoFormRegister}>
              Todos los campos son obligatorios
            </p>
            <button
              className={styles.submitRegister}
              disabled={
                Errors.name ||
                Errors.birthdate ||
                Errors.password ||
                Errors.nDni ||
                Errors.username ||
                Errors.email ||
                Errors.password
              }
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
