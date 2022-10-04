import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  background-color: #00923f;
  margin-top: 5%;
  display: flex;
  padding: 15px;

  @media (max-width: 720px) {
    display: flex;
    margin-top: 15%;
    margin-bottom: 10%;
  }
`;

export const Container = styled.div`
  display: flex;
`;

export const ImageBannerInf = styled.div`
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 25%;

  @media (max-width: 720px) {
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

  h3 {
    width: 400px;
  }

  @media (max-width: 720px) {
    h3 {
      font-size: 1.5rem;
      width: 300px;
    }
    h5 {
      font-size: 1rem;
    }
  }
`;

export const ButtonBannerInf = styled.div`
  margin-right: 10%;
  margin-left: auto;
  margin-top: auto;
  margin-bottom: auto;

  @media (max-width: 720px) {
    margin-left: 3%;
    font-size: 1rem;
    font-weight: 700;
  }
`;
