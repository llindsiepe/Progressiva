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

  @media (max-width: 720px) {
    width: 100%;
    margin-top: 15%;
  }
`;

export const BoxCards = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 10%;
  margin-right: 10%;

  @media (max-width: 720px) {
    display: block;
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

  h4 {
    margin-bottom: 10%;
  }

  h5 {
    text-align: justify;
  }

  @media (max-width: 720px) {
    h1 {
      font-size: 2.5rem;
    }
    h4 {
      font-size: 1.5rem;
      margin-bottom: 15%;
    }
    h5 {
      width: 380px;
    }
  }
`;

export const TextCertificate = styled.div`
  @media (max-width: 720px) {
    margin-bottom: 20%;

    h1 {
      font-size: 2.5rem;
    }
    h5 {
      margin-bottom: 10%;
    }
  }
`;

export const ImageArea = styled.div`
  @media (max-width: 720px) {
    display: none;
  }
`;

export const Qualities = styled.div`
  width: 100%;
  background-color: #00923f;
  display: flex;
  justify-content: space-between;

  @media (max-width: 720px) {
    display: block;
    padding-top: 5%;
    padding-bottom: 5%;
    padding-left: 8%;
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

  @media (max-width: 720px) {
    img {
      width: 12%;
      margin-bottom: 3%;
    }

    h5 {
      font-size: 1.2rem;
      margin-bottom: 10%;
    }
  }
`;

export const ImageTruck = styled.div`
  @media (max-width: 720px) {
    display: none;
  }
`;
