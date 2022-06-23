import styled from "styled-components";

export const Cards = styled.div`
  width: 100%;
  min-height: 420px;
  height: 100%;
  padding: 5%;
  margin-top: 5%;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 9px;
  
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
`;

export const Type = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 5%;
  @media (max-width: 450px) {
    display: block;    
  }
`;
