/* eslint-disable no-unused-vars */
import { useState } from "react";
import styles from "./TurnsForm.module.css";
import validate from "../../helpers/validate";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setUserAppointmentsReduce } from "../../redux/userSlice";

const FormTurns = () => {
  const userId = useSelector((state) => state.actualUser.userData.user.id);
  console.log("========>", userId);

  const POSTAPPOINTMENT_URL = `https://5a85-186-127-224-4.ngrok-free.app/appointments/schedule`;

  console.log(POSTAPPOINTMENT_URL);
  const Dispatch = useDispatch();

  const [TurnsState, setTurns] = useState({
    date: "",
    time: "",
  });
  const [errors, setErrors] = useState({});

  // Función para manejar los cambios en los campos del formulario
  const handleChange = (event) => {
    const { name, value } = event.target;
    setTurns({
      ...TurnsState,
      [name]: value,
    });
    // Validar el campo que ha cambiado y actualizar los errores
    const fieldErrors = validate({ ...TurnsState, [name]: value });

    setErrors({
      ...errors,
      ...fieldErrors,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { date, time } = validate(TurnsState); // Validar el formulario y extraer solo las validaciones de fecha y hora
    setErrors({ date, time }); // Actualizar los errores del formulario

    // Verificar si hay errores de validación
    if (!date && !time) {
      // No hay errores, proceder con la creación del turno
      const newAppointment = {
        date: TurnsState.date,
        time: TurnsState.time,
        userId: userId,
      };

      axios
        .post(POSTAPPOINTMENT_URL, newAppointment)
        .then((response) => response.data)
        .then((data) => {
          Dispatch(setUserAppointmentsReduce(data));
          alert(
            `Ha sido creada la nueva reserva: Fecha: ${data.date} Hora: ${data.time}`
          );
        })
        .catch((error) => {
          console.error("Error al crear el nuevo turno:", error);
          alert("Hubo un error al crear el nuevo turno.");
        });
    } else {
      // Hay errores de validación, no se puede crear el turno
      alert("Por favor, corrija los errores del formulario antes de enviarlo.");
    }
  };

  return (
    <>
      <div className={styles.containerGeneralFormTurns}>
        <div className={styles.container1}>
          <div className={styles.container2}>
            <div className={styles.BoxImgTurns}>
              <img
                src="https://images.pexels.com/photos/5355830/pexels-photo-5355830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>

            <form className={styles.formTurns} onSubmit={handleSubmit}>
              <div className={styles.BoxTitleFormTurns}>
                {" "}
                <h2 className={styles.titleFromTurns}>Solicitar turno</h2>
              </div>
              <label htmlFor="date" className={styles.labelFormTurns}>
                Fecha:
              </label>
              <input
                type="date"
                className={styles.inputFormTurns}
                name="date"
                value={TurnsState.date}
                onChange={handleChange}
              />
              <p>{errors.date ? errors.date : null}</p>{" "}
              {/* Mostrar el error de fecha */}
              <label htmlFor="time" className={styles.labelFormTurns}>
                Hora:
              </label>
              <select
                name="time"
                onChange={handleChange}
                className={styles.select}
              >
                <option value="">Horarios</option>
                <option value="09:00">09:00</option>
                <option value="09:30">09:30</option>
                <option value="10:00">10:00</option>
                <option value="10:30">10:30</option>
                <option value="11:00">11:00</option>
                <option value="11:30">11:30</option>
                <option value="12:00">12:00</option>
                <option value="12:30">12:30</option>
                <option value="13:00">13:00</option>
              </select>
              <p>{errors.time ? errors.time : null}</p>{" "}
              {/* Mostrar el error de hora */}
              <button type="submit" className={styles.buttonFormTurns}>
                Solicitar Turno
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormTurns;
