import React from "react";
import { Cards, TextCard, ImageCard } from "./styles.js";

import User from "../../imagens/user.png";
import Avaliação from "../../imagens/avaliacao.png";

export default function Card({ name, text }) {
  return (
    <>
      <Cards>
        <ImageCard>
          <img src={User} />
          <h2>{name}</h2>
          <img src={Avaliação} />
          <TextCard>{text}</TextCard>
        </ImageCard>
      </Cards>
    </>
  );
}
