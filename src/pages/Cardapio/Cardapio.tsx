import styles from "./Cardapio.module.scss";
import { ReactComponent as Logo } from "assets/logo.svg";
import Buscador from "./buscador/buscador";
import { useState } from "react";
import Filtros from "./filtros/filtro";
import Ordenador from "./ordenador/Ordenador";

export default function Cardapio() {
  const [busca, setBusca] = useState("");
  const [filtro, setFiltro] = useState<number | null>(null);
  const [ordenador, setOrdenador] = useState("");

  return (
    <main>
      <nav className={styles.menu}>
        <Logo></Logo>
      </nav>
      <header className={styles.header}>
        <div className={styles.header__text}>A casa do codigo e da massa</div>
      </header>
      <section className={styles.cardapio}>
        <h3 className={styles.cardapio__titulo}>Cardapio</h3>
        <Buscador busca={busca} setBusca={setBusca} />
        <div className={styles.cardapio__filtros}>
          <Filtros filtro={filtro} setFiltro={setFiltro}></Filtros>
          <Ordenador
            ordenador={ordenador}
            setOrdenador={setOrdenador}
          ></Ordenador>
        </div>
      </section>
    </main>
  );
}
