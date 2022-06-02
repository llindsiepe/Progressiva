import React from "react";
import { Cards, TextCard } from "./styles.js";

export default function Card({ text }) {
  return (
    <>
      <Cards>
        <TextCard>{text}</TextCard>
      </Cards>
    </>
  );
}
