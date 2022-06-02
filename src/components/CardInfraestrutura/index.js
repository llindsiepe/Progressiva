import React from "react";
import { Cards, TextCard, ImageCard, Type } from "./styles.js";

import User from "../../imagens/user.png";
import Avaliação from "../../imagens/avaliacao.png";

export default function Card({ name, text, image }) {
  return (
    <>
      <Cards>
        <ImageCard>
          <img src={image} />
          <Type>
            <h2>{name}</h2>
            <img src={Avaliação} width="80" height="10" />
          </Type>
          <TextCard>{text}</TextCard>
        </ImageCard>
      </Cards>
    </>
  );
}
