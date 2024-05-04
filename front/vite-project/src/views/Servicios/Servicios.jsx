/* eslint-disable no-unused-vars */
import styles from "./Servicios.module.css";

const Servicios = () => {
  return (
    <>
      <div className={styles.sectionServicios}>
        <div className={styles.containerGeneralServicios}>
          <div>
            <h2 className={styles.titleServicios}>Servicios</h2>
            <div className={styles.BoxParrafoServicios}>
              <p className={styles.ParrafoServicios}>
                En nuestra clínica dental, ofrecemos una amplia gama de
                tratamientos diseñados para mejorar tu salud bucal y tu sonrisa.
                Desde limpiezas regulares hasta procedimientos cosméticos
                avanzados, estamos aquí para cuidar de ti. Nuestro equipo
                profesional y amable está comprometido con tu bienestar dental.
                ¡Ven y descubre cómo podemos ayudarte a lograr la sonrisa que
                siempre has deseado
              </p>
            </div>
          </div>

          <div className={styles.containerCardsServicios}>
            {/* Card 1 */}
            <div className={styles.flipCard}>
              <div className={styles.flipCardInner}>
                <div className={styles.flipCardFront}>
                  <img
                    src="https://static.wixstatic.com/media/a0080d_50d46ea8dc6649ea834c75f22fbd10dc~mv2.png/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a0080d_50d46ea8dc6649ea834c75f22fbd10dc~mv2.png"
                    alt=""
                    className={styles.cardImageHome}
                  />
                </div>
                <div className={styles.flipCardBack}>
                  <p className={styles.titleCardServicios}>
                    Tratamientos de limpieza
                  </p>
                  <p className={styles.ParrafoCardServicios}>
                    Brindamos tratamientos de limpieza profunda para mantener tu
                    sonrisa radiante y saludable.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className={styles.flipCard}>
              <div className={styles.flipCardInner}>
                <div className={styles.flipCardFront}>
                  <img
                    src="https://img.freepik.com/fotos-premium/disparo-vertical-mujer-anteojos-protectores-tratamiento-blanqueamiento-dental_118628-4152.jpg"
                    alt=""
                    className={styles.cardImageHome}
                  />
                </div>
                <div className={styles.flipCardBack}>
                  <p className={styles.titleCardServicios}>
                    Tratamientos de limpieza
                  </p>
                  <p className={styles.ParrafoCardServicios}>
                    Nuestros procedimientos de blanqueamiento dental te ofrece
                    una sonrisa más brillante y segura en solo una sesión.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className={styles.flipCard}>
              <div className={styles.flipCardInner}>
                <div className={styles.flipCardFront}>
                  <img
                    src="https://futurdent.com/wp-content/uploads/2021/05/2-definicion-implante-dental.jpg"
                    alt=""
                    className={styles.cardImageHome}
                  />
                </div>
                <div className={styles.flipCardBack}>
                  <p className={styles.titleCardServicios}>
                    Implantes dentales
                  </p>

                  <p className={styles.ParrafoCardServicios}>
                    Los implantes dentales restauran la función y la estética de
                    tu sonrisa de forma duradera. Con nuestras carillas
                    dentales, puedes transformar tu sonrisa en solo unas pocas
                    visitas
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className={styles.flipCard}>
              <div className={styles.flipCardInner}>
                <div className={styles.flipCardFront}>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6oHXM5xQmq-ld7oAyBTYYWmPfvYJFrIlyew&usqp=CAU"
                    alt=""
                    className={styles.cardImageHome}
                  />
                </div>
                <div className={styles.flipCardBack}>
                  <p className={styles.titleCardServicios}>Ortodoncia </p>

                  <p className={styles.ParrafoCardServicios}>
                    Nuestros servicios de ortodoncia ofrecen soluciones
                    personalizadas para corregir la alineación dental y mejorar
                    la salud bucal
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Servicios;
