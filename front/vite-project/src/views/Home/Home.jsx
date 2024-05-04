/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import style from "../Home/Home.module.css";

const Home = () => {
  return (
    <>
      <section className={style.section1Home}>
        <div className={style.containerGeneralHome}>
          <div className={style.containerHome}>
            <div>
              <h1>Bienvenido a nuestra Clínica Dental</h1>
              <div className={style.boxParrafoHome}>
                <p className={style.ParrafoHome}>
                  En nuestra clínica dental, ofrecemos atención de alta calidad
                  y un sistema eficiente de gestión de turnos. Nuestro equipo
                  altamente capacitado se dedica a garantizar su salud bucal en
                  un ambiente acogedor.
                </p>
                <p className={style.ParrafoHome}>
                  Con nuestro sistema en línea, reservar o cancelar citas es
                  rápido y conveniente. Además, ofrecemos la primera consulta
                  gratuita para nuevos pacientes. ¡Esperamos atenderle pronto!
                </p>
              </div>
              <div className={style.boxButtonHome}>
                <button className={style.buttonHome}>
                  <a href="/Contact">Contactanos</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
