import styled from "styled-components";

export const Cards = styled.div`
  width: 376px;
  height: 230px;
  background-color: #f1f1f1;
  border-radius: 9px;
  align-items: center;

  @media (max-width: 720px) {
    height: 180px;
  }
`;

export const TextCard = styled.h5`
  margin-top: 20%;
  margin-left: 5%;
  margin-right: 5%;
  text-align: justify;

  @media (max-width: 720px) {
    justify-content: center;
    padding-top: 15%;
  }
`;
