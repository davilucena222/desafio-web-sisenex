interface RepositoryProps {
  userRepository: {
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

export function Respository({ userRepository }: RepositoryProps) {
  console.log("repos:" + userRepository);

  return (
    <section>
      <div>
        <h3>
          <a href="">desafio-web-sisenex</a>
        </h3>
        <p>A single source of truth of all of my learning journey about topics regarding observability engineering and SRE</p>
      </div>

      <div>
        <span>8 stars</span>
        <p>License: MIT</p>
        <time>Updated 2 days ago</time>
      </div>
    </section>
  )
}