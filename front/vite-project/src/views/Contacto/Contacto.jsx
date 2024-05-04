import styles from "./Contacto.module.css";

const Contacto = () => {
  return (
    <div className={styles.sectionContacto}>
      <div className={styles.containerGeneralContacto}>
        <div className={styles.boxContainer1}>
          <img
            src="https://www.shutterstock.com/image-photo/female-doctor-examining-woman-teeth-600nw-2137422653.jpg"
            alt=""
          />
        </div>

        <div className={styles.boxContainer2}>
          <h3 className={styles.titleContac}>Contacto</h3>
          <div className={styles.boxSucursal}>
            <p>
              {" "}
              <span className={styles.subtitleContac}>Sucursal: </span> Dental
              Max
            </p>
            <p>
              <span className={styles.subtitleContac}>Direccion:</span> Las
              Heras 307, B1832 Lomas de Zamora, Provincia de Buenos Aires
            </p>
            <p>
              <span className={styles.subtitleContac}>Tel: </span>01131916024
            </p>
          </div>
          <div className={styles.boxSucursal}>
            <p>
              <span className={styles.subtitleContac}>Sucursal: </span> Centro
              Odontologico Integral Dra Saenz S Maris - A Piacentin
            </p>
            <p>
              <span className={styles.subtitleContac}>Direccion:</span> Av.
              Hipólito Yrigoyen 8353, B1832BRA Lomas de Zamora, Provincia de
              Buenos Aires
            </p>
            <p>
              <span className={styles.subtitleContac}>Tel: </span>01131916345
            </p>
          </div>
          <div className={styles.boxSucursal}>
            <p>
              <span className={styles.subtitleContac}>Sucursal: </span> CDental
              Zen
            </p>
            <p>
              <span className={styles.subtitleContac}>Direccion:</span> Juan
              José Castelli 135, B1832 Lomas de Zamora, Provincia de Buenos
              Aires
            </p>
            <p>
              {" "}
              <span className={styles.subtitleContac}>Tel: </span> 01131535670
            </p>
          </div>
          <div className={styles.boxSucursal}>
            <p>
              <span className={styles.subtitleContac}>Sucursal: </span>{" "}
              Odontologia Integral Mentruyt
            </p>
            <p>
              <span className={styles.subtitleContac}>Direccion:</span> CED,
              Antonio Mentruyt 158, B1832 Lomas de Zamora, Provincia de Buenos
              Aires
            </p>
            <p>
              <span className={styles.subtitleContac}>Tel: </span>01150389299
            </p>
          </div>

          <p></p>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
