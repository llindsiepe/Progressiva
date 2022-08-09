import styled from "styled-components";

export const Banner = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5%;
  margin-bottom: 5%;
`;

export const TextBanner = styled.div`
  margin-left: 10%;
  margin-top: 5%;
  width: 25%;

  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 451px) {
    h1 {
      font-size: 28px;
    }
    h4 {
      font-size: 10px;
    }
  }
`;

export const BoxCards = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 10%;
  margin-right: 10%;
  @media (max-width: 768px) {
    display: block;
  }
  @media (max-width: 450px) {
    margin-left: 5%;
  }
`;

export const AboutUs = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5%;
  margin-bottom: 5%;
  margin-left: 10%;
  margin-right: 10%;
`;

export const TextAboutUs = styled.div``;

export const TextArea = styled.div`
  width: 80%;
  margin-bottom: 10%;
  @media (max-width: 451px) {
    h1 {
      font-size: 28px;
    }
  }
`;

export const TextCertificate = styled.div`
  @media (max-width: 451px) {
    h1 {
      font-size: 28px;
    }
  }
`;

export const ImageArea = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Qualities = styled.div`
  width: 100%;
  background-color: #00923f;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    display: block;
    min-height: 0px;
    padding: 15px;
  }
`;

export const MapImage = styled.div``;

export const Box = styled.div`
  margin-left: 10%;
  margin-right: 10%;
`;

export const TextBox = styled.div`
  margin-top: 2%;
  margin-bottom: 1%;
  text-align: center;
  align-items: center;
  width: 400px;
  color: white;

  h5 {
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
  }
`;

export const ImageTruck = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;
