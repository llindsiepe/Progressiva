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
`;

export const Container = styled.div`
  display: flex;
`;

export const ImageBannerInf = styled.div`
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 25%;
`;

export const TextBannerInf = styled.div`
  color: white;
  margin-top: auto;
  margin-bottom: auto;
`;

export const ButtonBannerInf = styled.div`
  margin-right: 10%;
  margin-left: auto;
  margin-top: auto;
  margin-bottom: auto;
  @media (max-width: 768px) {
    margin-left: 50%;
    transform: translate(-70%);
  }
`;
