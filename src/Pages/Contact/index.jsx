import styles from "./Contact.module.css";
import { GoMail } from "react-icons/go";
import { BsInstagram, BsYoutube, BsLinkedin, BsGithub } from "react-icons/bs";

function Contact() {
  return (
    <section className={styles.Contact}>
      <h2 className={styles.titulo}>Contatos</h2>
      <div className={styles.textos}>
        <h3>entre em contato </h3>
        <p> para que possamos conversar mais sobre</p>
      </div>
      <div className={styles.icones}>
        <a
          href="mailto:luangonfernandes@outlook.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          <GoMail className={styles.icone} />
        </a>

        <a
          href="https://www.instagram.com/luangonfernandes/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <BsInstagram className={styles.icone} />
        </a>
        <a
          href="https://www.youtube.com/@Conters"
          target="_blank"
          rel="noreferrer noopener"
        >
          <BsYoutube className={styles.icone} />
        </a>

        <a
          href="https://www.linkedin.com/in/luangonfernandes/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <BsLinkedin className={styles.icone} />
        </a>
        <a
          href="https://github.com/ContersK"
          target="_blank"
          rel="noreferrer noopener"
        >
          <BsGithub className={styles.icone} />
        </a>
      </div>
    </section>
  );
}

export default Contact;
