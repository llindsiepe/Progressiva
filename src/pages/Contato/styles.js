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
  @media (max-width: 450px) {
    input {
      width: 80%;
      margin-left: 10%;
    }
    textarea {
      width: 80%;
      margin-left: 10%;
    }
  }
`;

export const ImageContact = styled.div`
  margin-left: 10%;
  margin-top: 10%;
  margin-right: 15%;
  margin-bottom: 15%;
  @media (max-width: 768px) {
    display: none;
    font-size: 25px;
  }
  @media (max-width: 450px) {
    display: none;
  }
`;

export const TextContact = styled.div`
  margin-top: 10%;
  margin-right: 10%;
  @media (max-width: 768px) {
    margin-left: 10%;
  }
  @media (max-width: 450px) {
    margin-left: 10%;
    margin-bottom: 25%;
  }
`;
