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
            <span style={{ color: "#00923F" }}>
              <b>& </b>
            </span>
            <b>AMOR POR TRANSPORTE.</b>
          </h1>
        </TextBanner>
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
        viverra. Morbi sed at ut pulvinar mi. Aenean amet, risus quis non
        bibendum. Faucibus nibh pharetra justo, cras nisl. Urna, at purus nibh
        pellentesque pellentesque ultricies vestibulum nisi sed. Sit tristique
        rhoncus fames metus montes, elit morbi posuere tincidunt. Viverra ipsum
        pellentesque in euismod. Porta lobortis aenean magna tellus tellus eget
        magna. Pulvinar proin gravida non aliquet pharetra sit. Vulputate turpis
        nunc, pharetra risus dignissim etiam bibendum sodales. Non nisl massa
        tempus eget et sit quam. Morbi varius sed nec, dictum. A dolor dignissim
        urna eros, massa mattis tellus tristique. In risus commodo, odio
        pellentesque. Pulvinar morbi eget elementum mattis mi urna eros. Morbi
        eget nec, pretium, arcu elementum tristique blandit amet ultricies. Eu
        aenean viverra turpis dui egestas adipiscing.
      </TextAbout>

      <Testimonial>
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
