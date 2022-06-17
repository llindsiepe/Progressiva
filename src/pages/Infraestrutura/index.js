import React from "react";

import TruckInfra from "../../imagens/TruckInfra.png";
import Aereo from "../../imagens/aereo.png";
import Rodoviario from "../../imagens/rodoviario.png";
import MatBio from "../../imagens/matbio.png";
import Medicamentos from "../../imagens/medicamentos.png";
import Sangue from "../../imagens/sangue.png";
import InstrCirurgicos from "../../imagens/instrcirurgicos.png";
import Laudos from "../../imagens/laudos.png";
import Insumos from "../../imagens/insumos.png";

import Navbar from "../../components/Navbar";
import Rodape from "../../components/Rodape";
import CardInfraestrutura from "../../components/CardInfraestrutura";
import BannerInferior from "../../components/BannerInferior";

import {
  Banner,
  TextBanner,
  TextAbout,
  OptionsInfra,
  TitleTypes,
  ContainerTypes,
  Types,
} from "./styles.js";

function Sobre() {
  return (
    <>
      <Navbar />
      <Banner>
        <TextBanner>
          <h1>
            INFRAESTRUTURA
            <br />
            <span style={{ color: "#00923F" }}>
              <b>& </b>
            </span>
            <b>MOBILIDADE.</b>
          </h1>
        </TextBanner>
        <div>
          <img src={TruckInfra} width="500" height="586" />
        </div>
      </Banner>

      <TextAbout>
        Possuímos uma ampla frota disponível para atender a cada demanda,
        respeitando suas necessidades e especificidades. Como complemento de
        nossa frota contamos com agregados devidamente cadastrados e
        qualificados pela nossa seguradora. Nossos veículos são equipados de
        baú, plataforma mecânica, carrinhos hidráulicos, prancha de
        movimentação, cinta para manuseio em escadas, papel bolhas, filme
        stretch, mantas, entre outros.
      </TextAbout>

      <OptionsInfra>
        <CardInfraestrutura
          name="Transporte Aéreo"
          image={Aereo}
          text="Visando atender  distâncias maioresou cargas urgentes e, ao mesmo tempo, garantir a segurança e a integridade da mercadoria é um desafio difícil para os demais modais. Já com o transporte de cargas aéreas, é garantido que suas entregas possam ser finalizadas em dias ou, até mesmo, em horas."
        />
        <CardInfraestrutura
          name="Transporte Rodoviário"
          image={Rodoviario}
          text="O Transporte Rodoviário de Cargas é o transporte que mais movimenta mercadorias no Brasil. Geralmente utilizado para transportar cargas em curtas e médias distâncias, onde é possível haver ligação de estradas de um destino a outro. Oferece flexibilidade de tráfego, além de facilidade na entrega, permitindo a entrega diretamente para o consumidor final."
        />
      </OptionsInfra>

      <TitleTypes>
        Realizamos variados tipos de <b>transporte hospitalar:</b>
      </TitleTypes>
      <ContainerTypes>
        <div>
          <Types>
            <img src={MatBio} width="15%" height="15%" />
            <h4>Material Biológico</h4>
          </Types>
          <Types>
            <img src={Medicamentos} width="15%" height="15%" />
            <h4>Medicamentos</h4>
          </Types>
        </div>

        <div>
          <Types>
            <img src={Sangue} width="15%" height="15%" />
            <h4>Bolsas de Sangue e Hemocomponentes</h4>
          </Types>
          <Types>
            <img src={InstrCirurgicos} width="15%" height="15%" />
            <h4>Instrumentos Cirúrgicos</h4>
          </Types>
        </div>

        <div>
          <Types>
            <img src={Laudos} width="15%" height="15%" />
            <h4>Laudos médicos</h4>
          </Types>
          <Types>
            <img src={Insumos} width="15%" height="15%" />
            <h4>Carga de insumos de saúde</h4>
          </Types>
        </div>
      </ContainerTypes>

      <BannerInferior />

      <Rodape />
    </>
  );
}

export default Sobre;
