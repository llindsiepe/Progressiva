import React from "react";
import Logotipo from "../../imagens/Logotipo.png";
import profile from "../../imagens/profile.png";
import { Main, LogotipoImage, Menu, Entrar } from "./styles.js";
import OptionMenu from "../OptionMenu/index.js";
import Button from "../Button/index.js";

export default function Navbar() {
  return (
    <>
      <Main>
        <LogotipoImage>
          <img src={Logotipo} width="152" height="61" />
        </LogotipoImage>

        <Menu style={{ display: "flex" }}>
          <OptionMenu title={"Home"} />
          <OptionMenu title={"Sobre"} />
          <OptionMenu title={"Infraestrutura"} />
          <OptionMenu title={"Contato"} />
        </Menu>

        <Entrar>
          <img width="24" height="24" src={profile} />
          <h1 style={{ fontSize: 14, color: "#00923F" }}>ENTRAR</h1>
          <Button title={"COTAÇÃO ONLINE"} />
        </Entrar>
      </Main>
    </>
  );
}
