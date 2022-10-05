import styled from "styled-components";

export const Cards = styled.div`
  width: 360px;
  height: 500px;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 9px;
`;

export const TextCard = styled.div`
  width: 100%;
  text-align: justify;
  margin-top: 10%;
`;

export const ImageCard = styled.div`
  margin-left: 15%;
  margin-right: 15%;
  margin-top: 15%;
  text-align: center;

  @media (max-width: 720px) {
    img {
      width: 20%;
      margin-top: 15%;
    }
  }
`;
