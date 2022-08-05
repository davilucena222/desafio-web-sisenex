import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

interface RepositoryProps {
  userState?: string;
}

interface Repositories {
  id?: number;
  full_name: string;
  language?: string;
  stargazers_count?: number;
  license?: {
    name: string;
  };
  updated_at: string;
  description?: string;
  html_url?: string;
}

export function Respository({ userState }: RepositoryProps) {
  const [repository, setRepository] = useState<Repositories[]>([]);

  useEffect(() => {
    if (userState) {
      fetch(`https://api.github.com/users/${userState}/repos`).then(response => response.json()).then(data => setRepository(data));
    }
  }, []);


  return (
    <>
      {repository.map(repo => (
        <a href={repo.html_url ? repo.html_url : "/"} key={repo.id} className={styles.container}>
          <div className={styles.description}>
            <h3>
              <div>
                <h1>{repo.full_name && (
                  repo.full_name
                )}</h1>
              </div>
            </h3>
            <div className={styles.border}></div>
            <p>{repo.description ? repo.description : "Sem descrição"}</p>
          </div>
          <div className={styles.repositoryInformations}>
            <p className={styles.language}>Linguagem Dominante: {repo.language ? repo.language : ""}</p>

            <ul className={styles.list}>
              <li>Stars: {repo.stargazers_count ? repo.stargazers_count : 0}</li>
              <li>License: {repo.license?.name ? repo.license.name : "Sem licença"}</li>
              <li>
                <time>Updated at: {repo.updated_at ? format(new Date(repo.updated_at), "dd MMM yyyy, HH:mm'h", {
                  locale: ptBR,
                }) : ""}</time>
              </li>
            </ul>
          </div>
        </a>
      ))}
    </>
  )
}