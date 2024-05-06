/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Turno from "../../components/Turno/Turno";
import style from "./MisTurnos.module.css";
import axios from "axios";
import { useSelector } from "react-redux";
import { setUserAppointmentsReduce } from "../../redux/userSlice";
import { useDispatch } from "react-redux";

// import navigate from "react-router-dom"

const MisTurnos = () => {
  const [turnos, setTurnos] = useState([]);
  console.log(turnos);
  const Dispatch = useDispatch();

  const Userid = useSelector((state) => state.actualUser.userData.user.id);

  const Appointments = useSelector(
    (state) => state.actualUser.userAppointments
  );
  console.log("===========>", Appointments);

  const GETAPPOINTMENTS_URL = `https://5a85-186-127-224-4.ngrok-free.app/users/${Userid}`;

  console.log("==============>", Userid);
  useEffect(() => {
    axios
      .get(GETAPPOINTMENTS_URL)
      .then((reponse) =>
        Dispatch(setUserAppointmentsReduce(reponse.data.appointments))
      )

      .then((turnosDB) => setTurnos(turnosDB))
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <div className={style.containerGeneralTurns}>
      <div className={style.containerTurns}>
        <div className={style.boxTitles}>
          <h1 className={style.animatedTitleTurns}>Mis turnos</h1>
          <div className={style.BoxParrafoTurns}>
            <p className={style.ParrafoTurns}>
              ¡Bienvenido a nuestra sección de turnos! En esta área de nuestra
              plataforma, puedes solicitar fácilmente turnos para una variedad
              de servicios disponibles. Simplemente selecciona el servicio
              deseado y elige una fecha y hora conveniente para ti. Nuestro
              sistema te proporcionará una confirmación instantánea de tu turno.
            </p>
          </div>
        </div>
        <div className={style.boxCardsTurns}>
          {Appointments.length > 0 ? (
            Appointments.map((Appointment) => (
              <Turno
                key={Appointment.id}
                id={Appointment.id}
                time={Appointment.time}
                date={Appointment.date}
                description={Appointment.description}
                status={Appointment.status}
              />
            ))
          ) : (
            <p className={style.ParrafoAviso}>
              Aún no hay turnos agendados para este usuario
            </p>
          )}
          ;
        </div>
      </div>
    </div>
  );
};

export default MisTurnos;
