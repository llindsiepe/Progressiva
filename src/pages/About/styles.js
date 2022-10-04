import styled from "styled-components";

export const Banner = styled.div`
  display: flex;
  margin-top: 5%;
  margin-bottom: 5%;

  @media (max-width: 720px) {
    img {
      display: none;
    }
  }
`;

export const TextBanner = styled.div`
  margin-top: 20%;
  margin-left: 10%;
  width: 35%;

  @media (max-width: 720px) {
    h1 {
      font-size: 2.5rem;
      width: 400px;
    }
  }
`;

export const BoxCards = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 10%;
  margin-right: 10%;
`;

export const TextAbout = styled.div`
  text-align: justify;
  margin-left: 10%;
  margin-right: 10%;
  margin-bottom: 10%;
`;

export const Testimonial = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 10%;
  margin-right: 10%;
  margin-bottom: 10%;

  @media (max-width: 720px) {
    display: block;
    margin-left: 12%;
  }
`;
