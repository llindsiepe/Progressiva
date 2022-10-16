import React from "react";

import Truck from "../../imagens/TruckAbout.png";
import Play from "../../imagens/play.png";
import imagem1 from "../../imagens/imagem1.png";
import imagem2 from "../../imagens/imagem2.png";
import imagem3 from "../../imagens/imagem3.png";
import imagem4 from "../../imagens/imagem4.png";

import Navbar from "../../components/Navbar";
import Rodape from "../../components/Rodape";
import CardTestimonial from "../../components/CardTestimonial";
import BannerInferior from "../../components/BannerInferior";

import {
  Banner,
  TextBanner,
  TextAbout,
  Testimonial,
  OurGalery,
  VideoPlay,
  PhotoGalery,
} from "./styles";

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
          name="Guilherme Reis"
          text="Em nome da Politec Saúde gostaria de agradecer a todo o time Progressiva, pelos serviços prestados até então é que tenhamos muitos anos mais desta parceria sólida e construtiva. Uma empresa com grandes qualidades, no qual cito como diferencial o atendimento ao cliente,  cumprimento nos prazos de entrega e acompanhamento de entregas/coletas."
        />
        <CardTestimonial
          name="Caio Ferrari"
          text="A Progressiva tem um serviço diferenciado, oferecendo rápido retorno quando necessário, os funcionários são cordiais e se destaca pela excelência prestada."
        />
        <CardTestimonial
          name="Patrícia Matos"
          text="Nós da Pensabio, agradecemos a Transportadora Progressiva pela parceria de 5 anos, atendendo e se adequando às nossas necessidades sempre que necessário!"
        />
      </Testimonial>

      <OurGalery>
        <h4>NOSSA GALERIA</h4>
        <VideoPlay>
          <img src={Play} />
          <h5>
            <a href="https://www.instagram.com/reel/CeuUyPJgPbJ/?igshid=N2NmMDY0OWE=">
              Clique e assista |
            </a>
            <a href="https://www.instagram.com/p/CdmGzrPOXZ1/?igshid=N2NmMDY0OWE=">
              | Clique e assista
            </a>
          </h5>
        </VideoPlay>
        <PhotoGalery>
          <img src={imagem1} />
          <img src={imagem2} />
          <img src={imagem3} />
          <img src={imagem4} />
        </PhotoGalery>
      </OurGalery>

      <BannerInferior />

      <Rodape />
    </>
  );
}

export default Sobre;
