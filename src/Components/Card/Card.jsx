import { FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import styles from "./Card.module.css";
import { BsArrowRight } from "react-icons/bs";

function Card({ name, description, html_url }) {
  return (
    <section className={styles.Card}>
      <h3>{name}</h3>
      <p> {description}</p>
      <div className={styles.card_footer}>
        <div className={styles.card_footer_icons}>
          <FaHtml5 />
          <FaCss3 />
          <FaJs />
          <FaReact />
        </div>
        <a
          href={html_url}
          target="_blank"
          rel="nopenner norefferer"
          className={styles.button}
        >
          <BsArrowRight />
        </a>
      </div>
    </section>
  );
}

export default Card;
