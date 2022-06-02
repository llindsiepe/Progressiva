import React from "react";

import Phone from "../../imagens/phone.png";

import Navbar from "../../components/Navbar";
import BannerInferior from "../../components/BannerInferior";
import Rodape from "../../components/Rodape";

import { Contact, ImageContact, TextContact } from "./styles";

function Sobre() {
  return (
    <>
      <Navbar />

      <Contact>
        <ImageContact>
          <img src={Phone} />
        </ImageContact>
        <TextContact>
          <h1>
            CONVERSE CONOSCO{" "}
            <span style={{ color: "#00923F" }}>
              <b>& </b>
            </span>{" "}
            <b>SIGA NOS NAS REDES.</b>
          </h1>
        </TextContact>
      </Contact>

      <BannerInferior />

      <Rodape />
    </>
  );
}

export default Sobre;
