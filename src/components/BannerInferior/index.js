import React from "react";
import {
  Main,
  ImageBannerInf,
  TextBannerInf,
  ButtonBannerInf,
} from "./styles.js";

import Button from "../Button/index.js";

import timer from "../../imagens/timer.png";

export default function BannerInferior() {
  return (
    <>
      <Main>
        <ImageBannerInf>
          <img src={timer} />
        </ImageBannerInf>
        <TextBannerInf>
          <h3>FAÇA SUA COTAÇÃO CONOSCO</h3>
          <h5>SIMPLES, FÁCIL & SEGURO.</h5>
        </TextBannerInf>
        <ButtonBannerInf>
          <Button title={"COTAÇÃO ONLINE"} />
        </ButtonBannerInf>
      </Main>
    </>
  );
}
