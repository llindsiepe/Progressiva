import React from "react";
import Logotipo from "../../imagens/Logotipo.png";
import profile from "../../imagens/profile.png";
import { Main, LogotipoImage, Menu, Entrar, OptionEntrar } from "./styles.js";
import OptionMenu from "../OptionMenu/index.js";
import Button from "../Button/index.js";

import { useHistory, useLocation } from "react-router-dom";


export default function Navbar() {
  const navigate = useHistory();
  const location = useLocation()

  return (
    <>
      <Main>
        <LogotipoImage>
          <img src={Logotipo} width="152" height="61" />
        </LogotipoImage>

        <Menu style={{ display: "flex" }}>
          <OptionMenu
            active={location.pathname == '/'}
            click={() => {
              navigate.push("/");
            }}
            title={"Home"}
          />
          <OptionMenu
            active={location.pathname == '/sobre'}
            click={() => {
              navigate.push("/sobre");
            }}
            title={"Sobre"}
          />
          <OptionMenu
            active={location.pathname == '/infraestrutura'}
            click={() => {
              navigate.push("/infraestrutura");
            }}
            title={"Infraestrutura"}
          />
          <OptionMenu
            active={location.pathname == '/contato'}
            click={() => {
              navigate.push("/contato");
            }}
            title={"Contato"}
          />
        </Menu>

        <Entrar>
          <a href="https://react.school" target="_blank">
            <OptionEntrar>
              <img width="24" height="24" src={profile} /> ENTRAR
            </OptionEntrar>
          </a>
          <a href="https://react.school" target="_blank">
            <Button title={"COTAÇÃO ONLINE"} />
          </a>
        </Entrar>
      </Main>
    </>
  );
}
