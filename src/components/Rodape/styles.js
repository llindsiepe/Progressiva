import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  height: 420px;
  background-color: #f1f1f1;
  display: flex;
  @media (max-width: 768px) {
    display: block;
}
`;

export const Info = styled.div`
  margin-top: auto;
  margin-bottom: auto;
  @media (max-width: 450px) {
    padding-top: 25px;
  }
`;

export const ImageInfo = styled.div`
  margin-left: 20%;
`;

export const TextInfo = styled.div`
  width: 30%;
  margin-left: 20%;
  margin-top: 6%;
  text-align: justify;
  @media (max-width: 768px) {
    margin-left: 25%;
}
`;

export const Redes = styled.div`
  text-align: center;
  margin-top: auto;
  margin-bottom: 15%;
  margin-right: 180px;
  @media (max-width: 768px) {
    h4{
      margin-left: 40%;
      width: 100%;
      margin-top: 15%;
    }
}
  
`;

export const ImageRedes = styled.div`
  margin-top: 20px;
  

  @media (max-width: 768px) {
    margin-left: 40%;
    width: 100%;
}
`;

export const Map = styled.div`
  width: 414px;
  height: 310px;
  margin-right: 50px;
  margin-top: 50px;
  @media (max-width: 768px) {
    marginTop: -50px;
  }
`;