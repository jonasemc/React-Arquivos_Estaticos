import React from "react";
import styles from "./buscador.module.scss";
import { CgSearch } from "react-icons/cg";

interface Props {
  busca: string;
  setBusca: React.Dispatch<React.SetStateAction<string>>;
  //{dispara uma acao}Dispatch<{acao disparada}React.SetStateAction<{o que vai ser passado dentro do setState}string>>
}

export default function Buscador({ busca, setBusca }: Props) {
  return (
    <div className={styles.buscador}>
      <input
        value={busca}
        onChange={(evento) => setBusca(evento.target.value)}
      />
      <CgSearch size={20} color="#4c4d5e" />
    </div>
  );
}
