import styled from "styled-components";

export const Container = styled.button`
  background: none;
  color: ${props => props.active ? "#00923f" : "black"};
  border: none;
  border-radius: 4px;
  text-align: center;
  font-size: 120%;
`;
