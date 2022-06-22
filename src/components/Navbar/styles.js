import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  height: 15%;
  background-color: white;
  box-shadow: 0px 0px 20px #e5e5e5;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    display: flex;
    padding: 15px;
  }
`;
export const LogotipoImage = styled.div`
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 10%;

  @media (max-width: 768px) {
    margin-left: 5%;
    margin-right: 5%;

    img {
      width: 50px;
      height: 25px;
    }
  }
  @media (max-width: 450px) {
    margin-left: 50%;
    transform: translate(-40%);
  }
`;
export const Menu = styled.div`
  gap: 2rem;
  @media (max-width: 768px) {
    margin-left: -10%;
    font-size: 0.8rem;
    align-items: center;
    gap: 1rem;
  }
  @media (max-width: 450px) {
    font-size: 1.5rem;
  }
`;

export const Entrar = styled.div`
  text-align: center;
  align-items: center;
  display: flex;
  margin-top: auto;
  margin-bottom: auto;
  gap: 1rem;
  margin-right: 10%;

  @media (max-width: 768px) {
    font-size: 0.8rem;

    img {
      display: none;
    }
  }

  @media (max-width: 450px) {
    margin-right: -10%;
    margin-left: 16rem;
  }
`;

export const OptionEntrar = styled.button`
  height: 40px;
  border-radius: 5px;
  background-color: #fff;
  color: #00923f;
  border: none;
`;
