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
  ImageTruck,
} from "./styles.js";

function Home() {
  return (
    <>
      <Navbar />
      <Banner>
        <TextBanner>
          <h1>
            COMPROMISSO, ESPECIALIZAÇÃO
            <br />
            <span style={{ color: "#00923F" }}>&</span> <b>SEGURANÇA.</b>
          </h1>
          <h4>Manuseio específico para uma entrega única</h4>
        </TextBanner>
        <ImageTruck>
          <img src={truck} />
        </ImageTruck>
      </Banner>
      <BoxCards>
        <Card
          text="Somos especialistas em transporte de equipamentos sensíveis, documentos, materiais promocionais, produtos
médicos, odontológicos, telefonia, eventos e feiras na área médica. Realizamos distribuição a nível nacional nos modais: Aéreo e
Rodoviário."
        />
        <Card
          text="Oferecemos serviços
diferenciados de manuseio, com caminhões equipados com plataforma elevatória e equipes de
funcionários treinados, resultando em agilidade, segurança e pontualidade para o seu negocio."
        />
        <Card
          text="Garantimos espaço necessário para sua carga voar
com rapidez e segurança para as principais cidades do país, objetivando sempre a qualidade total no
transporte."
        />
      </BoxCards>
      <BannerInferior />
      <AboutUs>
        <TextAboutUs>
          <TextArea>
            <h1>ÁREA DE ATENDIMENTO</h1>
            <h4>Conheça um pouco mais sobre nós.</h4>
            <h5>
              Somos uma empresa familiar com objetivo de prestação serviços
              transportes no seguimento medico com mão de obra especifica e
              treinada para transportes equipamentos produtos sensíveis,
              perecíveis de alto valor agregado, nos modais <b>Aéreo</b> e{" "}
              <b>Rodoviário</b> em todo território nacional.
            </h5>
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
        <TextBox>
          <img src={medal} />
          <h4>
            AMPLA{" "}
            <span style={{ color: "#FFFC00" }}>
              <b>EXPERIÊNCIA</b>
            </span>
          </h4>
          <h5>
            A Progressiva Transportes Urgentes esta no mercado desde o ano 2000,
            com trabalho sério e competente, tendo anuência de clientes
            expressivos no mercado.
          </h5>
        </TextBox>
        <TextBox>
          <img src={shield} />
          <h4>
            MONITORAMENTO &{" "}
            <span style={{ color: "#FFFC00" }}>
              <b>SEGURANÇA</b>
            </span>
          </h4>
          <h5>
            Temos parceria com os maiores e melhores agentes de cargas do
            Brasil, autorizados pelo ANAC, garantindo total segurança.
          </h5>
        </TextBox>
        <TextBox style={{ marginRight: "5%" }}>
          <img src={box} />
          <h4>
            ENTREGA PARA TODO O{" "}
            <span style={{ color: "#FFFC00" }}>
              <b>BRASIL</b>
            </span>
          </h4>
          <h5>
            Realizamos transportes Rodoviário e Aéreo para atender cada vez
            melhor você e suas prioridades.
          </h5>
        </TextBox>
      </Qualities>
      <Rodape />
    </>
  );
}

export default Home;
