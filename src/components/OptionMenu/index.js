import React from "react";
import { Container } from "./styles.js";

export default function Button({ title, click }) {
  return (
    <>
      <Container onClick={() => {click()}}>{title}</Container>
    </>
  );
}
