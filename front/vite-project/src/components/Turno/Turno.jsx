/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import style from "./Turno.module.css";
import formatDay from "../../Utils/FormatDate";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAppointmentsCancelReduce } from "../../redux/userSlice";

const Turno = ({ time, date, description, status, id }) => {
  // Utiliza un objeto destructurado para los parámetros
  const Dispatch = useDispatch();

  const CANCEL_URL = `https://5a85-186-127-224-4.ngrok-free.app/appointments/cancel/${id}`;

  const handlerClick = () => {
    axios.put(CANCEL_URL).then((reponse) => console.log("=====>", reponse));
    Dispatch(setAppointmentsCancelReduce(id));
  };

  return (
    <div className={style.container}>
      <div className={style.card}>
        <div className={style.BoxImgCard}>
          <img
            src="https://i.pinimg.com/736x/30/c3/11/30c3114dc595190744b93acfdee5c13b.jpg"
            alt=""
          />
        </div>
        <div className={style.BoxTextCard}>
          {" "}
          <h4>Fecha: {formatDay(date)}</h4>
          <h4> Horario: {time}</h4>
          <h4> Estado: {status}</h4>
          <button
            disabled={status === "cancelled"}
            onClick={handlerClick}
            className={style.primaryButton}
          >
            {" "}
            {status === "active" ? "Cancelar " : "Cancelado"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Turno;
