import styles from "./Page404.module.css";

function Page404() {
  return (
    <>
      <h2 className={styles.titulo2}>Algo de errado não esta certo!</h2>
      <div className={styles.textos}>
        <span className={styles.texto_grande}>404</span> <br />
        <strong className={styles.texto_vermelho}>
          Página não encontrada!
        </strong>
      </div>
    </>
  );
}

export default Page404;
