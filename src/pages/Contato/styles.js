import styled from "styled-components";

export const Contact = styled.div`
  display: flex;
  justify-content: space-between;

  input {
    border: none;
    border-bottom: solid 1px #cdcdcd;
    color: #000;
    cursor: pointer;
    margin-bottom: 0;
    width: 80%;
    border-radius: 5px;
    height: 35px;
    box-shadow: 0px;
    outline: none;
    transition: 0.15s;
    margin-bottom: 15px;
  }

  textarea {
    resize: vertical;
    width: 100%;
    outline: none;
    border: none;

    border: none;
    border-bottom: solid 1px #cdcdcd;
    color: #000;
    cursor: pointer;
    margin-bottom: 0;
    width: 80%;
    border-radius: 5px;
    height: 35px;
    box-shadow: 0px;
    outline: none;
    transition: 0.15s;
    margin-bottom: 15px;
  }

  @media (max-width: 768px) {
    input {
      width: 80%;
      margin-left: 10%;
    }
    textarea {
      width: 80%;
      margin-left: 10%;
    }
  }
  @media (max-width: 451px) {
    input {
      width: 80%;
      margin-left: 10%;
    }
    textarea {
      width: 80%;
      margin-left: 10%;
    }
  }
  form {
    button {
      width: 80%;
      padding: 10px;
      border: none;
      background: #00923f;
      color: #fff;
      font-weight: bold;
      border-radius: 5px;

      @media (max-width: 720px) {
        text-align: center;
        margin-left: 10%;
        margin-right: 10%;
      }
    }
  }
`;

export const ImageContact = styled.div`
  margin-left: 10%;
  margin-top: 10%;
  margin-right: 15%;
  margin-bottom: 15%;

  @media (max-width: 720px) {
    display: none;
  }
`;

export const TextContact = styled.div`
  margin-top: 25%;

  h1 {
    margin-bottom: 5%;
  }

  @media (max-width: 720px) {
    margin-left: 10%;
    margin-bottom: 10%;

    h1 {
      font-size: 2.5rem;
    }
  }
`;

export const Icons = styled.div`
  text-align: center;
  margin-top: 8%;
  margin-right: 20%;

  @media (max-width: 720px) {
    margin-left: 20%;
    margin-right: 20%;
    margin-bottom: 10%;
  }
`;
