import React, { useRef } from "react";

import Phone from "../../imagens/phone.png";

import Navbar from "../../components/Navbar";
import BannerInferior from "../../components/BannerInferior";
import Rodape from "../../components/Rodape";

import { Contact, ImageContact, TextContact } from "./styles";

import emailjs from "emailjs-com";

function Sobre() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xjni3hb",
        "template_zfnhszj",
        form.current,
        "bn4BnWI20PDvSZDCj"
      )
      .then(
        (result) => {
          alert("mensagem enviada com sucesso");
        },
        (error) => {
          alert("falha ao mandar mensagem");
        }
      );
  };
  return (
    <>
      <Navbar />

      <Contact>
        <ImageContact>
          <img src={Phone} />
        </ImageContact>
        <div>
          <TextContact>
            <h1>
              CONVERSE CONOSCO
              <br />
              <span style={{ color: "#00923F" }}>
                <b>& </b>
              </span>{" "}
              <b>SIGA NOS NAS REDES.</b>
            </h1>
          </TextContact>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="user_name" placeholder="Nome" />

            <input type="email" name="user_email" placeholder="Email" />
            <input type="text" name="number" placeholder="Número" />

            <textarea name="message" placeholder="Menssagem" /><br /><br />
            <button type="submit">Enviar</button>
          </form>
        </div>
      </Contact>

      <BannerInferior />

      <Rodape />
    </>
  );
}

export default Sobre;
