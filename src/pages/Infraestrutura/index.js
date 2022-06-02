import React from "react";

import TruckInfra from "../../imagens/TruckInfra.png";
import Aereo from "../../imagens/aereo.png";
import Rodoviario from "../../imagens/rodoviario.png";

import Navbar from "../../components/Navbar";
import Rodape from "../../components/Rodape";
import CardInfraestrutura from "../../components/CardInfraestrutura";
import BannerInferior from "../../components/BannerInferior";

import { Banner, TextBanner, TextAbout, OptionsInfra } from "./styles.js";

function Sobre() {
  return (
    <>
      <Navbar />
      <Banner>
        <TextBanner>
          <h1>
            INFRAESTRUTURA{" "}
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue sit
        tortor, donec nisi. Ipsum morbi enim diam auctor blandit libero. Velit
        et integer adipiscing massa cras. Eu velit venenatis pellentesque nisl.
        Pretium suscipit integer fringilla risus enim quis. Aliquam gravida
        ornare neque varius erat libero. Phasellus quam tellus vitae ultricies
        vel mattis massa velit diam. Nam tristique pellentesque tortor
        pellentesque duis amet. Elit, ornare odio euismod habitant sapien,
        aliquam. Vestibulum massa interdum nisl sed sed dui. Ultrices pulvinar
        nullam luctus nunc, mi, sollicitudin. Purus amet ut gravida fringilla
        erat in at lectus sit. Turpis libero nec in integer cum magna mauris
        viverra. Morbi sed at ut pulvinar mi.
      </TextAbout>

      <OptionsInfra>
        <CardInfraestrutura
          name="Transporte Aéreo"
          image={Aereo}
          text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in
          et, lectus sit lorem id integer."
        />
        <CardInfraestrutura
          name="Transporte Rodoviário"
          image={Rodoviario}
          text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in
          et, lectus sit lorem id integer."
        />
      </OptionsInfra>

      <BannerInferior />

      <Rodape />
    </>
  );
}

export default Sobre;
