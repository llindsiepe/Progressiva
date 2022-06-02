import React from "react";

import truck from "../../imagens/Truck.png";
import Brasil from "../../imagens/Brasil.png";
import Anvisa from "../../imagens/ANVISA.png";
import medal from "../../imagens/medal-star.png";
import box from "../../imagens/box.png";
import shield from "../../imagens/shield.png";

import Navbar from "../../components/Navbar";
import Rodape from "../../components/Rodape";
import Card from "../../components/Card";
import BannerInferior from "../../components/BannerInferior";

import {
  Banner,
  TextBanner,
  BoxCards,
  AboutUs,
  TextAboutUs,
  TextArea,
  TextCertificate,
  ImageArea,
  Qualities,
  Box,
  TextBox,
} from "./styles.js";

function Home() {
  return (
    <>
      <Navbar />
      <Banner>
        <TextBanner>
          <h1>
            COMPROMISSO, ESPECIALIZAÇÃO{" "}
            <span style={{ color: "#00923F" }}>&</span> <b>SEGURANÇA.</b>
          </h1>
          <h4>Manuseio específico para uma entrega única</h4>
        </TextBanner>
        <div>
          <img src={truck} />
        </div>
      </Banner>
      <BoxCards>
        <Card
          text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in
          et, lectus sit lorem id integer."
        />
        <Card
          text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in
          et, lectus sit lorem id integer."
        />
        <Card
          text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in
          et, lectus sit lorem id integer."
        />
      </BoxCards>
      <BannerInferior />
      <AboutUs>
        <TextAboutUs>
          <TextArea>
            <h1>ÁREA DE ATENDIMENTO</h1>
            <h5>Conheça um pouco mais sobre nós.</h5>
            Somos uma empresa familiar com objetivo de prestação serviços
            transportes no seguimento medico com mão de obra especifica e
            treinada para transportes equipamentos produtos sensíveis,
            perecíveis de alto valor agregado, nos modais <b>Aéreo</b> e{" "}
            <b>Rodoviário</b> em todo território nacional.
          </TextArea>
          <TextCertificate>
            <h1>SOMOS CERTIFICADOS</h1>
            <h5>Sua encomenda está segura conosco.</h5>
            <img width={220} height={60} src={Anvisa} />
          </TextCertificate>
        </TextAboutUs>
        <ImageArea>
          <img src={Brasil} />
        </ImageArea>
      </AboutUs>
      <Qualities>
        <TextBox style={{ marginLeft: "5%" }}>
          <img src={medal} />
          <h4>
            AMPLA{" "}
            <span style={{ color: "#FFFC00" }}>
              <b>EXPERIÊNCIA</b>
            </span>
          </h4>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum
          feugiat scelerisque elit varius aliquet.
        </TextBox>
        <TextBox>
          <img src={shield} />
          <h4>
            MONITORAMENTO &{" "}
            <span style={{ color: "#FFFC00" }}>
              <b>SEGURANÇA</b>
            </span>
          </h4>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum
          feugiat scelerisque elit varius aliquet.{" "}
        </TextBox>
        <TextBox style={{ marginRight: "5%" }}>
          <img src={box} />
          <h4>
            ENTREGA PARA TODO O{" "}
            <span style={{ color: "#FFFC00" }}>
              <b>BRASIL</b>
            </span>
          </h4>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum
          feugiat scelerisque elit varius aliquet.{" "}
        </TextBox>
      </Qualities>
      <Rodape />
    </>
  );
}

export default Home;
