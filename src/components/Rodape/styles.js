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
`;

export const ImageInfo = styled.div`
  margin-left: 10%;
`;

export const TextInfo = styled.div`
  width: 30%;
  margin-left: 10%;
  margin-top: 6%;
  text-align: justify;
`;

export const Redes = styled.div`
  text-align: center;
  margin-top: auto;
  margin-bottom: auto;
  margin-right: 180px;
`;

export const ImageRedes = styled.div`
  margin-top: 20px;
`;
