/* eslint-disable no-unused-vars */
import { useState } from "react";
import validate from "../../helpers/validate";
import styles from "./Login.module.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUserDataReduce } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const POSTLOGIN_URL = "https://5a85-186-127-224-4.ngrok-free.app/users/login";

  const [UserData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [Errors, setErrors] = useState({});

  const handlerInputChange = (event) => {
    const { name, value } = event.target;

    setUserData({
      ...UserData,
      [name]: value,
    });
    setErrors(validate({ ...UserData, [name]: value }));
  };

  const Dispatch = useDispatch();
  const Navigate = useNavigate();
  const handleOnSubmit = (event) => {
    event.preventDefault();
    axios
      .post(POSTLOGIN_URL, UserData)
      .then((response) => response.data)
      .then((data) => {
        Dispatch(setUserDataReduce(data));

        alert("Inicio de sesion exitoso!");
        Navigate("/");
      })
      .catch(() => {
        alert(
          " Lo siento, no pudimos iniciar sesión en este momento. Por favor, verifica tus credenciales e intenta nuevamente. Si el problema persiste, no dudes en contactarnos para obtener ayuda."
        );
      });
  };

  return (
    <>
      <section className={styles.sectionLogin}>
        <div className={styles.containerGeneralLogin}>
          <div>
            <img
              src="https://img.freepik.com/fotos-premium/disparo-vertical-dentista-haciendo-escaneo-dental-dientes-pacientes_118628-3726.jpg"
              alt=""
            />
          </div>
          <form className={styles.formLogin} onSubmit={handleOnSubmit}>
            <p className={styles.titleformLogin}>Login </p>

            <label htmlFor="username" className={styles.labelLogin}>
              Usuario:
            </label>
            <input
              className={styles.inputLogin}
              type="text"
              name="username"
              value={UserData.username}
              placeholder="usuario"
              onChange={handlerInputChange}
            />
            <p className={styles.parrafoFormLogin}>
              {Errors.username === "" ? null : Errors.username}
            </p>

            <label htmlFor="password" className={styles.labelLogin}>
              Contraseña:
            </label>
            <input
              className={styles.inputLogin}
              type="password"
              name="password"
              value={UserData.password}
              placeholder="*****"
              onChange={handlerInputChange}
            />
            <p className={styles.parrafoFormLogin}>
              {Errors.password === "" ? null : Errors.password}
            </p>

            <p className={styles.parrafoFormLogin}>
              Todos los campos son obligatorios
            </p>
            <button
              type="submit"
              className={styles.submitLogin}
              disabled={Errors.username || Errors.password}
            >
              Ingresar
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
