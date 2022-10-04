import React from "react";

import Truck from "../../imagens/TruckAbout.png";

import Navbar from "../../components/Navbar";
import Rodape from "../../components/Rodape";
import CardTestimonial from "../../components/CardTestimonial";
import BannerInferior from "../../components/BannerInferior";

import { Banner, TextBanner, TextAbout, Testimonial } from "./styles";

function Sobre() {
  return (
    <>
      <Navbar />
      <Banner>
        <div>
          <img src={Truck} />
        </div>
        <TextBanner>
          <h1>
            CONHEÇA A NOSSA HISTÓRIA
            <br />
            <span style={{ color: "#00923F" }}>
              <b>& </b>
            </span>
            <b>AMOR POR TRANSPORTE.</b>
          </h1>
        </TextBanner>
      </Banner>

      <TextAbout>
        A Progressiva Transportes Urgentes esta no mercado desde o ano 2000, com
        trabalho sério e competente, tendo anuência de clientes expressivos no
        mercado. Buscando a excelência em atendimento e prestação de serviços
        junto aos nossos clientes. Valorizando nosso patrimônio humano através
        de respeito, treinamento e desenvolvimento. Mantendo transparência e
        conduta ética e profissional em todas as ações.
        <br />
        Temos parceria com os maiores e melhores agentes de cargas do Brasil,
        autorizados pelo ANAC (Associação Nacional de Carga Aérea) Logística.
        Nossa empresa está licenciada junto à Anvisa para transportes de
        equipamentos, correlatos e biológicos no segmento médico e materiais
        perigosos.
      </TextAbout>

      <Testimonial>
        <CardTestimonial
          name="Maxuell S."
          text="Quero agradecer a Progressiva por todos esses anos de parceria e que continuemos por muitos anos. 
Uma empresa séria que valoriza seus clientes e está sempre disposta a atender as necessidades da Spectrun. Obrigado"
        />
        <CardTestimonial
          name="José Guimarães"
          text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in
          et, lectus sit lorem id integer."
        />
        <CardTestimonial
          name="José Guimarães"
          text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in
          et, lectus sit lorem id integer."
        />
      </Testimonial>

      <BannerInferior />

      <Rodape />
    </>
  );
}

export default Sobre;
