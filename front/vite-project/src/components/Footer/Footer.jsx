/* eslint-disable no-unused-vars */
import styles from "../Footer/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.containerGeneralFooter}>
      <div className={styles.boxDecoration}>
        <div className={styles.boxDecoration2}></div>
        <div className={styles.boxDecoration2}></div>
        <div className={styles.boxDecoration2}></div>
      </div>{" "}
      <div>
        {" "}
        <div className={styles.boxContent}>
          <span className={styles.redes}>
            <a href="https://www.instagram.com/dentalbracketsortodoncia/">
              <img
                src="https://www.svgrepo.com/show/452229/instagram-1.svg"
                alt=""
              />
            </a>
          </span>
          <span className={styles.redes}>
            <a href="https://www.facebook.com/dentalbracketsortodoncia/">
              <img
                src="https://www.svgrepo.com/show/475647/facebook-color.svg"
                alt=""
              />
            </a>
          </span>
          <span className={styles.redes}>
            <a href="https://api.whatsapp.com/send?phone=5491163623953">
              <img
                src="https://www.svgrepo.com/show/475692/whatsapp-color.svg"
                alt=""
              />
            </a>
          </span>
        </div>
        <div className={styles.boxContent}>
          <h3>Clínica Dental</h3>
        </div>
        <div className={styles.boxContent}>
          <p>ClínicaDental@gmail.com</p>
        </div>
        <div className={styles.boxContent2}>
          <p>
            <a href="">Informacion legal</a>{" "}
          </p>
          <p>
            <a href="">Politica de privacidad</a>{" "}
          </p>
        </div>
      </div>
      <div className={styles.boxDecoration}>
        <div className={styles.boxDecoration2}></div>
        <div className={styles.boxDecoration2}></div>
        <div className={styles.boxDecoration2}></div>
      </div>
    </div>
  );
};

export default Footer;
