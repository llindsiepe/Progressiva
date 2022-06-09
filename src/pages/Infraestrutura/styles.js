import styled from "styled-components";

export const Banner = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5%;
  margin-bottom: 5%;
`;

export const TextBanner = styled.div`
  margin-right: 25%;
  margin-top: 20%;
  margin-left: 10%;

 

  @media (max-width: 768px) {
    font-size: 25px;
    margin-top: 5%;

  }
  @media (max-width: 450px) {
    font-size: 25px;
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
  margin-bottom: 10%;
`;

export const OptionsInfra = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 10%;
  margin-right: 10%;
  margin-bottom: 10%;
  @media (max-width: 768px) {
    display: block;
    margin-left: 10%;
  }
  @media (max-width: 450px) {
    display: block;
    margin-left: 5%;

  }
`;
