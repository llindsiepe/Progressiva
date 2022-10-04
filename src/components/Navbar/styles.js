import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  height: 10rem;
  background-color: white;
  box-shadow: 0px 0px 20px #e5e5e5;
  display: flex;
  justify-content: space-between;

  @media (max-width: 720px) {
    display: flex;
    padding: 15px;
    height: 15%;
  }
`;
export const LogotipoImage = styled.div`
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 10%;

  @media (max-width: 720px) {
    margin-left: 2%;
    margin-right: 2%;

    img {
      width: 50px;
      height: 25px;
    }
  }
`;
export const Menu = styled.div`
  gap: 2rem;

  @media (max-width: 720px) {
    font-size: 0.8rem;
    align-items: center;
    gap: 0.5rem;
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

  @media (max-width: 720px) {
    font-size: 0.8rem;

    img {
      display: none;
    }
  }
`;

export const OptionEntrar = styled.button`
  height: 40px;
  border-radius: 5px;
  background-color: #fff;
  color: #00923f;
  border: none;
`;
