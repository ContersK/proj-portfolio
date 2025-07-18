import fullStackDevelopment from "./images/fullStackDevelopment.png";
import styles from "./About.module.css";
import {
  BiLogoTypescript,
  BiLogoReact,
  BiLogoNodejs,
  BiLogoMongodb,
} from "react-icons/bi";

function About() {
  return (
    <section className={styles.About}>
      <div className={styles.bio}>
        <img
          src={fullStackDevelopment}
          alt="Imagem ilustrativa"
          className={styles.img_dev}
        />
        <div className={styles.text}>
          <h2>Sobre mim</h2>
          <p>
            Olá, meu nome é <span>Luan G. Fernades</span>{" "}
          </p>
          <strong>Sou um desenvolvedor Full Stack.</strong>
          <p>
            Tenho experiência em diversas tecnologias e estou sempre aprendendo
            mais. Estou animado para compartilhar meus projetos e colaborar com
            outros desenvolvedores.
          </p>
        </div>
      </div>
      <div className={styles.techs}>
        <h2>Tecnologias</h2>
        <div className={styles.techIcons}>
          <BiLogoTypescript className={styles.icon} />
          <BiLogoReact className={styles.icon} />
          <BiLogoNodejs className={styles.icon} />
          <BiLogoMongodb className={styles.icon} />
        </div>
      </div>
    </section>
  );
}

export default About;
