import styles from "./Projects.module.css";
import Card from "../../Components/Card/Card";
import { useEffect, useState } from "react";

function Projects() {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://api.github.com/users/ContersK/repos?page=1&per_page=10"
        );

        if (!response.ok) {
          throw new Error(`Erro: ${response.status}`);
        }

        const data = await response.json();
        setRepositories(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepositories();
  }, []);

  if (loading) {
    return (
      <section className={styles.projects}>
        <h2>Projetos</h2>
        <p>Carregando repositórios...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className={styles.projects}>
        <h2>Projetos</h2>
        <p>Erro ao carregar repositórios: {error}</p>
      </section>
    );
  }

  return (
    <section className={styles.projects}>
      <h2>Projetos</h2>
      {repositories.length > 0 ? (
        <section className={styles.container}>
          {repositories.map((repo) => (
            <Card
              key={repo.id}
              name={repo.name}
              description={repo.description}
              html_url={repo.html_url}
            />
          ))}
        </section>
      ) : (
        <p>Nenhum repositório encontrado.</p>
      )}
    </section>
  );
}

export default Projects;
