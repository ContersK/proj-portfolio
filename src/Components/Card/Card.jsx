import { FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import styles from "./Card.module.css";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

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
        <Link to={html_url} className={styles.button}>
          <BsArrowRight />
        </Link>
      </div>
    </section>
  );
}

export default Card;
