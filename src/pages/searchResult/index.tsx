import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Respository } from "../../components/Repository";

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
  repos_url: {
    repo_id: number;
    language: string;
    stargazers_count: number;
    license: {
      name: string;
    };
    updated_at: string;
    description: string;
  }
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
    <section>
      <aside>
        <div>
          <img src={user?.avatar_url} alt="Avatar do GitHub" />

          <div>
            <h1>{user?.name}</h1>
            <strong>{user?.bio}</strong>
            <span>{user?.public_repos} Repositories</span>
            <span>{user?.followers} Followers</span>
            <span>{user?.following} Following</span>
          </div>
        </div>
      </aside>

      <Respository userRepository={user?.repos_url} />
    </section>
  );
}