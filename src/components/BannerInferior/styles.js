import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  background-color: #00923f;
  margin-top: 5%;
  display: flex;
  padding: 15px;

  @media (max-width: 768px) {
    display: block;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const Container = styled.div`
  display: flex;
`;

export const ImageBannerInf = styled.div`
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 25%;
  @media (max-width: 768px) {
    margin-left: 3%;
    text-align: center;
    img {
      display: none;
    }
  }
`;

export const TextBannerInf = styled.div`
  color: white;
  margin-top: auto;
  margin-bottom: auto;

  @media (max-width: 451px) {
    h3 {
      font-size: 2rem;
    }
  }
`;

export const ButtonBannerInf = styled.div`
  margin-right: 10%;
  margin-left: auto;
  margin-top: auto;
  margin-bottom: auto;
  @media (max-width: 768px) {
    margin-left: 3%;
  }

  @media (max-width: 451px) {
    font-size: 0.8rem;
    margin-left: -4%;
  }
`;
