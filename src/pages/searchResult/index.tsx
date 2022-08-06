import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Respository } from "../../components/Repository";
import styles from "./styles.module.scss";
import { User, Users, BookBookmark } from "phosphor-react";

interface SearchResultProps {
  state: string;
}

interface UserData {
  id: string;
  avatar_url: string;
  name: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  repos_url: string;
}

export function SearchResult() {
  const { state } = useLocation() as unknown as SearchResultProps;

  const [user, setUser] = useState<UserData>();

  useEffect(() => {
    if (state) {
      fetch(`https://api.github.com/users/${state}`).then(response => response.json()).then(data => setUser(data));
    }
  }, []);

  return (
    <>
      {user?.id ? (
        <section className={styles.container}>
          <aside className={styles.containerAside}>
            <div className={styles.avatar}>
              <img src={user?.avatar_url} alt="Avatar do GitHub" />

              <div className={styles.userInformations}>

                <h1>
                  <User size={17} />
                  {user?.name}
                </h1>
                <p>{user?.bio}</p>
                <span>
                  <BookBookmark /> {user?.public_repos} Repositories
                </span>
                <span>
                  <Users size={16} /> {user?.followers} Followers
                  • {user?.following} Following
                </span>
              </div>
            </div>
          </aside>


          <div className={styles.repositories}>
            <Respository userState={state} />
          </div>
        </section>
      ) : (
        <div className={styles.error}>
          <h1>Usuário não encontrado! Clique no botão para voltar até a página inicial.</h1>

          <button>
            <Link to="/">Usuário não encontrado</Link>
          </button>
        </div>
      )}
    </>
  );
}