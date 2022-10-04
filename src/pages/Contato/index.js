import React, { useRef } from "react";

import Phone from "../../imagens/phone.png";
import WhatsApp from "../../imagens/WhatsApp.png";
import Facebook from "../../imagens/Facebook.png";
import Instagram from "../../imagens/instagram.png";

import Navbar from "../../components/Navbar";
import BannerInferior from "../../components/BannerInferior";
import Rodape from "../../components/Rodape";

import { Contact, ImageContact, TextContact, Icons } from "./styles";

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
          alert("Mensagem enviada com sucesso");
        },
        (error) => {
          alert("Falha ao mandar mensagem");
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

            <textarea name="message" placeholder="Mensagem" />
            <br />
            <br />
            <button type="submit">Enviar</button>
          </form>
          <Icons>
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
            <a
              href="https://www.instagram.com/progressivatransportes/"
              target="_blank"
            >
              <img src={Instagram} />
            </a>
          </Icons>
        </div>
      </Contact>

      <BannerInferior />

      <Rodape />
    </>
  );
}

export default Sobre;
