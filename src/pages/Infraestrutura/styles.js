import styled from "styled-components";

export const Banner = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5%;
  margin-bottom: 5%;

  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 450px) {
    img {
      display: none;
    }
    margin-left: -2%;
  }
`;

export const TextBanner = styled.div`
  margin-right: 25%;
  margin-top: 20%;
  margin-left: 10%;

  @media (max-width: 720px) {
    h1 {
      font-size: 2.5rem;
    }
  }
`;

export const ImageBanner = styled.div`
  @media (max-width: 720px) {
    img {
      display: none;
    }
  }
`;

export const BoxCards = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 5%;
  margin-right: 5%;
`;

export const TextAbout = styled.div`
  text-align: justify;
  margin-left: 10%;
  margin-right: 10%;
  margin-bottom: 5%;

  @media (max-width: 720px) {
    margin-bottom: 15%;
  }
`;

export const OptionsInfra = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 10%;
  margin-right: 10%;
  margin-bottom: 10%;

  @media (max-width: 720px) {
    display: block;
    margin-left: 10%;
  }
`;

export const TitleTypes = styled.h3`
  margin-left: 10%;
  margin-bottom: 4%;
`;

export const ContainerTypes = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 8%;
  margin-right: 8%;

  img {
    width: 70px;
  }
  @media (max-width: 720px) {
    display: block;
    margin-top: 10%;
  }
`;

export const Types = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  margin-bottom: 5%;
  margin-left: 10%;
`;
