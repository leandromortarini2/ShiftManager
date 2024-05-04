/* eslint-disable no-unused-vars */
import styles from "./NavBar.module.css";
import miImg from "../../assets/Img/login.svg";
import { Link } from "react-router-dom";
import IconoLogin from "../IconoLogin/IconoLogin";
import { useSelector, useDispatch } from "react-redux";
import {
  setUserAppointmentsReduce,
  setUserDataReduce,
} from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const Login = useSelector((state) => state.actualUser.userData.login);
  const Dispatch = useDispatch();
  const Navigate = useNavigate();
  const handleLogout = () => {
    const confirmed = window.confirm("Quiere cerrar sesion?");
    if (confirmed) {
      Dispatch(setUserDataReduce({}));
      Dispatch(setUserAppointmentsReduce([]));
      Navigate("/");
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.CajaLogo}>
          <img
            className={styles.logo}
            src="https://i.pinimg.com/736x/30/c3/11/30c3114dc595190744b93acfdee5c13b.jpg"
            alt=""
          />
        </div>

        <div className={styles.boxButtons}>
          <Link to="/">
            <button className={styles.button}>Home</button>
          </Link>
          <Link to="/servicios">
            <button className={styles.button}>Servicios</button>
          </Link>
          {Login ? (
            <Link to="/MisTurnos">
              <button className={styles.button}>Mis Turnos</button>
            </Link>
          ) : null}
          {Login ? (
            <Link to="/TurnsForm">
              <button className={styles.button}>Solicita Turno</button>
            </Link>
          ) : null}

          <Link to="/Contact">
            <button className={styles.button}>Contact</button>
          </Link>
        </div>
        <div className={styles.containerIconLogin}>
          <IconoLogin />
        </div>
      </div>
    </>
  );
};

export default NavBar;
