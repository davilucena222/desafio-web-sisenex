import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";

export function Home() {
  const navigate = useNavigate();

  const [value, setValue] = useState("");

  function handlePageSearchUser() {
    navigate("/searchResult");
  }

  function handleSearchUser(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  return (
    <section className={styles.container}>
      <h1>GitHub - Explorer</h1>

        <form action="">
          <input 
            type="text" 
            placeholder="Buscar Usuário" 
            value={value}
            onChange={handleSearchUser}
          />
            <button disabled={value === ""} onClick={handlePageSearchUser}>Pesquisar</button>
        </form>
    </section>
  )
}