import styled from "styled-components";

export const Cards = styled.div`
  width: 580px;
  min-height: 420px;
  height: 100%;
  padding: 2%;
  padding-bottom: 5%;
  margin-top: 5%;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 9px;

  @media (max-width: 720px) {
    padding: 1rem;
    padding-bottom: 5rem;
    width: 100%;
  }
`;

export const TextCard = styled.div`
  width: 100%;
  text-align: justify;
  margin-top: 5%;
`;

export const ImageCard = styled.div`
  margin-left: 15%;
  margin-right: 15%;
  margin-top: 10%;
  text-align: center;

  img {
    width: 25%;
  }

  @media (max-width: 720px) {
    img {
      width: 25%;
    }
  }
`;

export const Type = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 5%;

  h2 {
    font-size: 2.5rem;
  }

  img {
    width: 70px;
    height: 10px;
  }

  @media (max-width: 720px) {
    display: block;
  }
`;
