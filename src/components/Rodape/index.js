import React from "react";
import {
  Main,
  Info,
  ImageInfo,
  TextInfo,
  Redes,
  ImageRedes,
  Map
} from "./styles.js";

import Logotipo from "../../imagens/Logotipo.png";
import WhatsApp from "../../imagens/WhatsApp.png";
import Facebook from "../../imagens/Facebook.png";
import Location from "../../imagens/location.png";

import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <img src={Location} />;

export default function Card() {
  return (
    <>
      <Main>
        <Info>
          <ImageInfo>
            <img src={Logotipo} width="200px" />
          </ImageInfo>
          <TextInfo>
            <h6>
              <b>MATRIZ: </b>
              R. Ibirajuba, 138 - Jardim Monte Carmelo, Guarulhos - SP,
              07194-000
            </h6>
            <h6>
              <b>TELEFONE:</b> (11) 7940-8307
            </h6>
            <h6>
              <b>E-MAIL:</b> renato@progressivatransportes.com.br,
              marcos@progressivatransportes.com.br,
              rodrigo@progressivatransportes.com.br
            </h6>
          </TextInfo>
        </Info>
        <Redes>
          <h4>
            <b>SIGA-NOS</b> NAS REDES
          </h4>
          <ImageRedes>
            <a
              href="https://api.whatsapp.com/send?phone=5511940305742"
              target="_blank"
            >
              <img src={WhatsApp} />
            </a>
            <a
              href="https://www.facebook.com/Progressiva-Transportes-Urgentes-Ltda-230312080378108/"
              target="_blank"
            >
              <img src={Facebook} />
            </a>
          </ImageRedes>
        </Redes>
        <Map>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyB0wspSx_AgabhNTixEMDaAwEYWe50NS1s",
            }}
            defaultCenter={{
              lat: -23.44,
              lng: -46.51,
            }}
            defaultZoom={11}
            >
            <AnyReactComponent lat={-23.4433437} lng={-46.5120132} text="" />
          </GoogleMapReact>
        </Map>
      </Main>
    </>
  );
}
